import 'dotenv/config';
import mysql from 'mysql2';

const mysqlDB = mysql.createConnection({
    host: process.env.DB_IP,
    user: 'root',
    password: '',
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
});

mysqlDB.connect(err => {
    if (err) {
        console.log('MysqlDB 연결에 실패하였습니다...\n' + err);
        mysqlDB.end();
        throw err;
    } else {
        console.log(
            `정상적으로 MysqlDB 서버에 연결되었습니다.  mysql://${process.env.DB_IP}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
        );
    }
});

export { mysqlDB };
