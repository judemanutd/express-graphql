import { ConnectionOptions, createConnection } from "typeorm";

import databaseConfig from "../../ormconfig";

const options: ConnectionOptions = databaseConfig as ConnectionOptions;

const connection = () => createConnection(options);

export default connection;
