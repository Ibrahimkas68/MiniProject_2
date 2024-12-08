FROM openjdk:17-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ./target/MiniProjct-0.0.1.jar app.jar
LABEL authors="ibrahimkasmi"

ENTRYPOINT ["java", "-jar","/app.jar"]