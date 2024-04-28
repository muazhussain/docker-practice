FROM mysql

ENV MYSQL_ROOT_PASSWORD=root_passowrd_123
ENV MYSQL_DATABASE=student_record_db
ENV MYSQL_USER=muaz
ENV MYSQL_PASSWORD=1234
ENV MYSQL_TCP_PORT=3307

EXPOSE 3307

COPY init.sql /docker-entrypoint-initdb.d/

VOLUME /var/lib/mysql
