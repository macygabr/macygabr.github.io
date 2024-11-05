FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

COPY pom.xml ./
COPY src ./src

RUN mvn clean package

CMD ["java", "-jar", "target/ApiGateWayApplication-0.0.1.jar"]
