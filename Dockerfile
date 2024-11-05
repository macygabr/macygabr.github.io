FROM maven:3.8.7-openjdk-21 AS build
WORKDIR /app

COPY pom.xml ./
COPY src ./src

RUN mvn clean package

CMD ["java", "-jar", "target/ApiGateWayApplication-0.0.1.jar"]
