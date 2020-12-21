/*
 * Copyright 2010-2011 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package com.wugui.datax.admin.config;

import java.util.Properties;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

/**
 * @version 0.1
 *
 * @author Hefei Li
 *
 * created Dec 18, 2020
 */
@Configuration
public class JavaMailConfig {
  
  @Value("${spring.mail.host}")
  private String mailServerHost;

  @Value("${spring.mail.port}")
  private Integer mailServerPort;

  @Value("${spring.mail.username}")
  private String mailServerUsername;

  @Value("${spring.mail.password}")
  private String mailServerPassword;

  @Value("${spring.mail.properties.mail.smtp.auth}")
  private String mailServerAuth;

  @Value("${spring.mail.properties.mail.smtp.starttls.enable}")
  private String mailServerStartTls;
  
  @Bean
  public JavaMailSender getJavaMailSender() {
      JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
      
      mailSender.setHost(mailServerHost);
      mailSender.setPort(mailServerPort);
      
      mailSender.setUsername(mailServerUsername);
      mailSender.setPassword(mailServerPassword);
      
      Properties props = mailSender.getJavaMailProperties();
      props.put("mail.transport.protocol", "smtp");
      props.put("mail.smtp.auth", mailServerAuth);
      props.put("mail.smtp.starttls.enable", mailServerStartTls);
      props.put("mail.debug", "true");
      
      return mailSender;
  }
  
  @Bean
  public SimpleMailMessage templateSimpleMessage() {
      SimpleMailMessage message = new SimpleMailMessage();
      message.setText("This is the test email template for your email:\n%s\n");
      return message;
  }
  
  @Bean
  public ResourceBundleMessageSource emailMessageSource() {
      final ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
      messageSource.setBasename("mailMessages");
      return messageSource;
  }
}
