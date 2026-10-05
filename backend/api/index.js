import {app} from '../server.js'; import {connectDb} from '../config/db.js';
let connection; export default async function handler(req,res){connection??=connectDb();await connection;return app(req,res)};
