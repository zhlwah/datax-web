package com.wugui.datax.admin.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * 表的信息，包含了 表 所在的 数据库信息和 其包含的列
 * @author zhanghailong86
 * @create 2022/3/25 17:37
 */
@Data
public class SyncTableInfo {

    /**
     * job_jdbc_datasource 表中的id， jdbc_url 字段的值是  数据库连接，包含了 库名
     */
    @ApiModelProperty("源数据源id")
    private Long srcDatasourceId;


    @ApiModelProperty("源数据源的表所属的库或用户名。如果是oracle则填写用户名。如果是sqlserver、Postgresql则填写库名")
    private String tableSchema;

    @ApiModelProperty("目标数据源id")
    private Long desDatasourceId;

    @ApiModelProperty("表名")
    private String tableName;

    /**
     * 不一定是当前表的所有列，可能是部分列
     */
    @ApiModelProperty("列名")
    private List<String> columns;

    @ApiModelProperty("是否同步库下所有表的表结构。0否，1是")
    private Boolean syncAllTables;
}
