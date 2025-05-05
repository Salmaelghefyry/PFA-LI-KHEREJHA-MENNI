package com.projectmanagement.apigateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("auth-service", r -> r.path("/api/auth/**")
                        .uri("lb://auth-service"))
                .route("user-service", r -> r.path("/api/users/**")
                        .uri("lb://user-service"))
                .route("project-service", r -> r.path("/api/projects/**")
                        .uri("lb://project-service"))
                .route("task-service", r -> r.path("/api/tasks/**")
                        .uri("lb://task-service"))
                .route("dashboard-service", r -> r.path("/api/dashboard/**")
                        .uri("lb://dashboard-service"))
                .route("notification-service", r -> r.path("/api/notifications/**")
                        .uri("lb://notification-service"))
                .build();
    }
}