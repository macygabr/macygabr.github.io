FROM openjdk:21-jdk-slim
WORKDIR /app
COPY . .
RUN ./gradlew bootJar
CMD ["java", "-jar", "build/libs/yourappname.jar"]
