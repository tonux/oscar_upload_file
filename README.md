# Node.js Express Upload/Download file Rest API



## Project setup
```
npm install
```

### Run
```
node server.js
```

Methods	Urls	             Actions
POST	  /upload	            upload a File
GET	    /files	            get List of Files (name & url)
GET	    /files/[filename]	  download a File
DELETE	/files/[filename]	  delete a File