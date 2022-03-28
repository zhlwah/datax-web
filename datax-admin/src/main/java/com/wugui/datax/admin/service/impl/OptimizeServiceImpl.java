package com.wugui.datax.admin.service.impl;

import com.wugui.datax.admin.entity.JobDatasource;
import com.wugui.datax.admin.entity.SyncTableInfo;
import com.wugui.datax.admin.service.DatasourceQueryService;
import com.wugui.datax.admin.service.JobDatasourceService;
import com.wugui.datax.admin.service.OptimizeService;
import com.wugui.datax.admin.tool.query.BaseQueryTool;
import com.wugui.datax.admin.tool.query.QueryToolFactory;
import com.wugui.datax.admin.util.JdbcConstants;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@Slf4j
public class OptimizeServiceImpl implements OptimizeService {

    @Autowired
    private JobDatasourceService jobDatasourceService;
    @Autowired
    private DatasourceQueryService datasourceQueryService;

    /**
     * 自动创建表
     * @param syncTableInfo
     * @return
     * @throws IOException
     */
    public String createTable(SyncTableInfo syncTableInfo) {
        try{
            //获取目标数据源对象
            JobDatasource datasource = jobDatasourceService.getById(syncTableInfo.getDesDatasourceId());
            //判断 是否要同步所有表
            if(!syncTableInfo.getSyncAllTables()){
                //如果是 同步 单表 ======
                //如果目标数据源数据库类型 clickhosue，则 直接 手动拼接，ck的列字段类型 都 //todo  暂时写成String
                if (JdbcConstants.CLICKHOUSE.equals(datasource.getDatasource())) {
                    //todo 暂时根据 前端传的列 建表，是否 要根据 源数据库表的所有列 建表需要后面再讨论
                    List<String> columns = syncTableInfo.getColumns();
                    doClickhouseCreateDDL(syncTableInfo.getTableName(), columns, QueryToolFactory.getByDbType(datasource));
                }else{
                    // todo 根据源数据库表的 ddl 语句 得到 目标数据库表 的 ddl语句，包含 字段类型 都要 正确映射，
                    //  可以 用 sqoop 本身的 ddl转换能力，通过 http带着 源表的 ddl语句向 sqoop 服务端请求 获取 目标表的 ddl
                    // 根据源数据库id查询 源表的 所有表的列和 列的 字段类型
                    //            // 根据 参数columns 和 desDatasourceId 拼接 符合 desDatasourceId 数据库类型的 create table语句，注意 字段类型的 转换
                    //            // 将 create sql语句 在 目标数据库执行
                    throw new RuntimeException("你好，暂不支持 " + datasource.getDatasource() + " 数据库类型，将在后续版本支持，敬请期待！");
                }

            }else{
                //如果是同步 源库下 所有表 ======
                // 首先根据 源库 信息 查询到 库下 所有表
                List<String> tableList = datasourceQueryService.getTables(syncTableInfo.getSrcDatasourceId(), syncTableInfo.getTableSchema());
                //如果目标数据源数据库类型 是 clickhosue
                if (JdbcConstants.CLICKHOUSE.equals(datasource.getDatasource())) {
                    // 遍历单表，获取 表 的所有列和 列的 字段类型
                    for(String tableName: tableList){
                        //获取所有字段
                        List<String> columnList = datasourceQueryService.getColumns(syncTableInfo.getSrcDatasourceId(), tableName);
                        doClickhouseCreateDDL(tableName, columnList, QueryToolFactory.getByDbType(datasource));
                    }
                }else{
                    // todo 根据源数据库表的 ddl 语句 得到 目标数据库表 的 ddl语句，包含 字段类型 都要 正确映射，
                    //  可以 用 sqoop 本身的 ddl转换能力，通过 http带着 源表的 ddl语句向 sqoop 服务端请求 获取 目标表的 ddl
                    // 遍历单表，获取 表 的所有列和 列的 字段类型
                    // 根据 参数columns 和 desDatasourceId 拼接 符合 desDatasourceId 数据库类型的 create table语句，注意 字段类型的 转换
                    // 将 create sql语句 在 目标数据库执行
                    throw new RuntimeException("你好，暂不支持 " + datasource.getDatasource() + " 数据库类型，将在后续版本支持，敬请期待！");
                }

            }
        } catch (Exception e){
            String errStr = "[createTable Exception] --> the exception message is:" + e.getMessage();
            log.error( errStr);
            throw new RuntimeException("自动建表失败，请联系管理员！");
        }


        return "ok";
    }

    /**
     * 针对clickhouse的 ddl 语句生成及执行
     * @param tableName
     * @param columnList
     * @param queryTool
     */
    public void doClickhouseCreateDDL(String tableName, List<String> columnList, BaseQueryTool queryTool){
        StringBuilder sb = new StringBuilder();
        sb.append("CREATE TABLE IF NOT EXISTS ").append( tableName).append(" (");
        String firstColumn = "";
        int columnSize = columnList.size();
        for (int i = 0; i < columnSize; i++) {
            String columnName = columnList.get(i);
            if(i==0){
                firstColumn = columnName;
            }
            if(i != (columnSize-1)){
                sb.append(" `").append(columnName).append("` String,");
            }else{
                sb.append(" `").append(columnName).append("` String");
            }
        }
        //todo partion by 和 order by 列名替换
//                sb.append(") ENGINE = MergeTree PARTITION BY (year) ORDER BY (vdate) SETTINGS index_granularity=8192;");
        sb.append(") ENGINE = MergeTree ORDER BY (" + firstColumn  + ")  SETTINGS index_granularity=8192;");
        String sqlddl = sb.toString();
        log.info( "ddl语句：" + sqlddl);
        // 执行 create sql
        queryTool.executeCreateTableSql(sqlddl);
    }
}