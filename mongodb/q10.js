// Create a folder mongo-replica and sub folders data1 data2 and data3

// Open command prompt and start running servers on separate tabs

// mongod -replSet rs1 -logpath "d:\mongo-replica\data1\1.log" --dbpath "d:\mongo-replica\data1" --port 27018

// mongod -replSet rs1 -logpath "d:\mongo-replica\data2\2.log" --dbpath "d:\mongo-replica\data2" --port 27019

// mongod -replSet rs1 -logpath "d:\mongo-replica\data3\3.log" --dbpath "d:\mongo-replica\data3" --port 27020

// Follow these instructions to configure replica set:

// mongosh --port 27018

// rs.initiate({_id:"rs1",members:[{_id:0,host:"127.0.0.1:27018"},{_id:1,host:"127.0.0.1:27019"},{_id:2,host:"127.0.0.1:27020"}]})

// rs.config()  //to check the config
// rs.status()

// Use mongosh command with the following connection string and the primary server will automatically get connected:


// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// show dbs
// use mytestdb
// db.createCollection("customers")
// db.customers.insertOne({name:"John"})

// Check secondary servers. Check both the servers if data is replicated
// mongosh --port 270xx
// Secondary will start, can read but cannot write
// db.getMongo().setReadPref("secondary")  //or rs.secondaryOk()
// use mytestdb
// db.customers.find() – will work now

// mongosh --port 270xx
// Secondary will start, can read but cannot write
// db.getMongo().setReadPref("secondary")  //or rs.secondaryOk()
// use mytestdb
// db.customers.find() – will work now

// Shutdown primary server and the primary will be automatically changed to one of the other two servers
// Go to primary 270xx
// Use admin
// db.shutdownServer() 
// ----------------------
// Now go to secondary servers 270xx or 270xx, and type show dbs…you would notice that one of the servers will be changed to primary automatically
// ----------------------------
// Open new tab and start previous primary 270xx again
// mongod -replSet rs1 -logpath d:\mongo-replica\data1\1.log --dbpath d:\mongo-replica\data1\ --port 270xx
// Open another tab and run mongosh. You will observe that it is now a secondary server.
// mongosh --port 270xx

// ***************In mac****************
// # Instance 1 - port 27018
// mongod --replSet rs0 --port 27018 --dbpath /Users/premkumar/Documents/mongo-replica/data1 --bind_ip localhost --fork --logpath /Users/premkumar/Documents/mongo-replica/data1/mongod.log

// # Instance 2 - port 27019
// mongod --replSet rs0 --port 27019 --dbpath /Users/premkumar/Documents/mongo-replica/data2 --bind_ip localhost --fork --logpath /Users/premkumar/Documents/mongo-replica/data2/mongod.log

// # Instance 3 - port 27020
// mongod --replSet rs0 --port 27020 --dbpath /Users/premkumar/Documents/mongo-replica/data3 --bind_ip localhost --fork --logpath /Users/premkumar/Documents/mongo-replica/data3/mongod.log


/* This is the process to run 3 servers*/
// Yes, you can absolutely run the replica set on ports `27018`, `27019`, and `27020` instead of the default `27017`.

// ---

// ## ✅ Here's How (using your existing folders)

// Assuming:

// * `data1` ➝ for port `27018`
// * `data2` ➝ for port `27019`
// * `data3` ➝ for port `27020`

// ---

// ## 🛠 Step-by-Step Commands

// ### 🔁 Step 1: Kill any old processes (optional but safe)

// ```bash
// ps aux | grep mongod
// # Then kill any running mongod processes (replace <PID> with actual numbers)
// kill -9 <PID1> <PID2> <PID3>
// ```

// ---

// ### ▶️ Step 2: Start all 3 `mongod` instances (on updated ports)

// ```bash
// # Instance 1 - port 27018
// mongod --replSet rs0 --port 27018 --dbpath /Users/premkumar/Documents/mongo-replica/data1 --bind_ip localhost --fork --logpath /Users/premkumar/Documents/mongo-replica/data1/mongod.log

// # Instance 2 - port 27019
// mongod --replSet rs0 --port 27019 --dbpath /Users/premkumar/Documents/mongo-replica/data2 --bind_ip localhost --fork --logpath /Users/premkumar/Documents/mongo-replica/data2/mongod.log

// # Instance 3 - port 27020
// mongod --replSet rs0 --port 27020 --dbpath /Users/premkumar/Documents/mongo-replica/data3 --bind_ip localhost --fork --logpath /Users/premkumar/Documents/mongo-replica/data3/mongod.log
// ```

// ---

// ### 💻 Step 3: Connect to the first instance (27018)

// ```bash
// mongosh --port 27018
// ```

// ---

// ### 🧠 Step 4: Initiate the replica set

// Inside the `mongosh` shell:

// ```js
// rs.initiate({
//   _id: "rs0",
//   members: [
//     { _id: 0, host: "localhost:27018" },
//     { _id: 1, host: "localhost:27019" },
//     { _id: 2, host: "localhost:27020" }
//   ]
// })
// ```
rs.initiate({_id: "rs0",members: [{ _id: 0, host: "localhost:27018" },{ _id: 1, host: "localhost:27019" },{ _id: 2, host: "localhost:27020" }]});

// ---

// Step 5: Configure
// ```js
// rs.congig()
// ```

// ### ✅ Step 6: Check status

// ```js
// rs.status()
// ```

// You should now see:

// * One node as `PRIMARY`
// * Two nodes as `SECONDARY`


