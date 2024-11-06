import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

const DatabaseConnection = MongooseModule.forRoot(
  // Ссылка для подключения к базе данных Atlase;
  // FoodStaion - внтури ссылки нужно укзать к какой базе данных на сервере нужно подключиться;
  'mongodb+srv://ILLIA:ILLIA@cluster-mytest.tq0rc.mongodb.net/FoodStaion?retryWrites=true&w=majority&appName=Cluster-myTest',

  // Кнофигурационный объект;
  {
    // События которые произойдут после того как было устанвлено соединение с базой данных;
    onConnectionCreate: (connection: Connection) => {
      connection.on('connected', () => console.log('connected'));
      connection.on('open', () => console.log('open'));
      connection.on('disconnected', () => console.log('disconnected'));
      connection.on('reconnected', () => console.log('reconnected'));
      connection.on('disconnecting', () => console.log('disconnecting'));

      return connection;
    },
  },
);

export default DatabaseConnection;
