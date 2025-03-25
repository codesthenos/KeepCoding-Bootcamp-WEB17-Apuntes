## Try the example [IP](http://18.214.166.58) [DOMAIN](https://codesthenos.duckdns.org/)

# STEPS TO SET UP A SIMPLE LINUX SERVER IN AWS

## CREATE AWS EC2 INSTANCE

- Create an account and login in [AWS](https://aws.amazon.com/), _free tier aviable_

- Go to [EC2](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Overview:) and click on `Launch instance`

- Filling the form:

  - **Name and tags**: `<SERVER_NAME>`

  - **Application and OS Images (Amazon Machine Image)**

    - **Quick Start**: `Ubuntu`

    - **Amazon Machine Image (AMI)**: `Ubuntu Server 24.04 LTS (HVM), SSD Volume Type` _Free tier elegible_

    - **Architecture**: `64-bit (x86)`

  - **Instance type**: `t2.micro` _Free tier elegible_

  - **Key pair (login)**

    - Click on `Create new key pair`
    - **Key pair name**: `<KEY_NAME>`
    - Click on `Create key pair`
    - It will download a file (the key) in the pc

  - **Network settings**: `Default settings`

  - **Configure storage**: `Default settings` _Free tier up to 30gb_

  - **Summary**

    - **Number of instances**: `1`

    - Click on `Launch instance`

## CONECTING TO THE INSTANCE WITH A BASH (SSH)

- Open a _bash_ terminal (ex: git bash)

- Type the next command to connect to the instance:

  ```
  ssh -i <PATH_TO_KEY_FILE.pem> ubuntu@<YOUR_PUBLIC_AWS_INSTANCE_IP>
  ```

- `ubuntu` is the user that has root permissions and the only user in the instance by _default_

- `<PATH_TO_KEY_FILE.pem>` can be setted as _relative_ or _absolute_ path

- `<YOUR_PUBLIC_AWS_INSTANCE_IP>` can be found here [**Public IPv4 address**](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Instances:) in **Details** tab

- If you got an **ERROR** that has:

  ```
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  ```

- We are good, to provide the enough **security** to the _keyfile_:

- Try the next command to change the _permissions_

  ```
  chmod 600 <PATH_TO_KEY_FILE.pem>
  ```

- If the command did not work in your bash, try this

  - Find the _keyfile.pem_ using the **File Explorer**

  - Right click on the file, click on **properties**

  - In _security_ tab, click on **advanced**

  - Click on **Disable inheritance** then, click on **Remove all inherited permissions from this object**

  - Now probably you will have the _Permission entries_ empty, click on **Add**

  - Click on **Select a principal**, click on **Advanced**, click on **Find Now**

  - In the _Search results_ tab double click `<your user>`

  - Click **OK**, select **full control**, click **OK**, click **Apply**, click **OK**, click **OK**

## SETTING UP THE SERVER WITH A BASH

- Once we are connected to the instance, we _upgrade_ the **apt** package manager

  ```
  sudo apt upgrade
  ```

- To transfer folders and files from our pc to the server, in the example, the _dist_ folder is placed in the `/var/www/dist` server folder (thought to place the static webs)

  ```
  scp -i <PATH_TO_KEY_FILE.pem> <PATH_FILE_OR_FOLDER_TO_TRANSFER> ubuntu@<YOUR_PUBLIC_AWS_INSTANCE_IP>:<PATH_TO_PLACE_THE_DATA>
  ```

  - If the command did not work download and use [**Filezilla**](https://filezilla-project.org/)

    - Open it and click on the icon on the top left of the screen behind **File** tab

    - Click on **New site**, type `<SERVER_NAME>` and press **enter**

    - Filling the form at the right side, the **general** tab

      - **Protocol**: `SFTP - SSH File Transfer Protocol`

      - **Host**: `<YOUR_PUBLIC_AWS_INSTANCE_IP>`, **Port**: `22`

      - **Logon Type**: `Key file`

      - **User**: `ubuntu`

      - **Key file**: click in `Browse...` and find your `<PATH_TO_KEY_FILE.pem>`

      - Click on **Connect**, now you can see at the left side your pc and at the right side the server, just drag _dist_ folder from left to right

      - If you cannot place the _dist_ folder directly in `/var/www/`, just place it in `ubuntu`

      - Then in the server _bash_ type `sudo mv /PATH_TO_dist /var/www` to move it

- We use any of those methods to transfer a _dist_ or _build_ folder coming from a react project, in the example i used [**my react assignment**](https://github.com/codesthenos/KC-WEB17-Fundamentos-REACT-codesthenos)

- We are going to use **nginx** to serve the _react app_

  - First step is to **install**

    ```
    sudo apt install nginx
    ```

  - We create a _config_ file in the `/etc/nginx/site-aviable/` folder called **react**

    - In the _bash_ of the server, we type `sudo nano /etc/nginx/site-aviable/react`

    - In the text editor we type

      ```
      server {
        listen 80;
        server_name <YOUR_PUBLIC_AWS_INSTANCE_IP>;
        root /var/www/dist;
        index index.html;
        location / {
            try_files $uri $uri/ /index.html;
        }
      }
      ```

    - Press **ctrl+x**, **y** and **enter** to save and leave

  - To use this config, we have to create a direct access in the `/etc/nginx/site-enabled/`

    ```
    sudo ln -s /etc/nginx/site-aviable/react /etc/nginx/site-enabled/react
    ```

  - With `sudo nginx -t` we test if the config file has any syntax error

  - With `sudo systemctl reload nginx` we reload nginx and start using the config file

- Now we create a **user** that will be the one that will have the _node-app_, this is made for security porpouses

  - In the _bash_ of the server we type `sudo adduser <USER_NAME>` to create the user

  - The _bash_ will ask for a **password**, you can type _whatever_, cause after create it, we will **disable** de user's hability to **login**

  - You can press **enter** to let the other fields _empty_, and when end, the **user** is created

  - Now we disable the user's hability of login with `sudo passwd -l <USER_NAME>`, now you cannot login with `<USER_NAME>`

- We install [**NVM**](https://github.com/nvm-sh/nvm) as our **node** _version manager_, and after, we install **node**

  - In the server _bash_ we type `sudo -u <USER_NAME> -i`, and now the _bash_ is in `/home/apps`, we type

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
    ```

  - Now we just have to type `logout` and again `sudo -u <USER_NAME> -i` and `nvm -v` to check that we see the **nvm** version

  - We install **node** with `nvm install node` (this will install the latest lts version, checkout if you need a specific version `nvm install X`)

- Now we are going create the _node app_ folder (the folder that has the node project)

  - In the example i opened a _bash_ in the server, ran `sudo -u apps -i` and `git clone [**node-app**](https://github.com/codesthenos/KC-WEB17-Backend-Avanzado-NODE-codesthenos)`

  - But you can transfer a file like in the previous example, but try to place it in `/home/apps/`

- Now we open a _bash_ in the server and type `sudo -i <USER_NAME> -u`, and then, `cd /node-app`, then `npm i`

- Now we do `npm start` (or the start command of your node-app), and if your _node-app_ uses a **MongoDB** like the example, you will have an **error**

- Now we are going to install and setup [**MongoDB**](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) (with user and security) to fix this

  - First we have to import the **MongoDB** public _GPG key_

    ```
    curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
      sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
      --dearmor
    ```

  - Second we add the `mongo-org-8.0.list` package to the **apt** list `/etc/apt/sources.list.d/mongodb-org-8.0.list`

    ```
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
    ```

  - Now we reload the package database using `sudo apt update`

  - With `sudo apt install mongodb-org` we install **mongo**, now we are going to start _setting it up_

  - After the installation by default, you can access the **database** without any _authentication_, we are going to [**set up**](https://www.mongodb.com/docs/manual/core/authentication/#std-label-authentication) that _authentication_

    - Enable Access Controll [**SCRAM**](https://www.mongodb.com/docs/manual/tutorial/configure-scram-client-authentication/)

      - To start **mongo** , type in a server _bash_ `sudo systemctl start mongod`

      - Type `mongosh` to enter the **mongo-shell**, type `use admin`

      - To Create the **Admin-User** copy this, edit your user name and the password

        ```
        db.createUser(
          {
            user: "<USER_NAME>",
            pwd: "<USER_PASSWORD>",
            roles: [
              { role: "userAdminAnyDatabase", db: "admin" },
              { role: "readWriteAnyDatabase", db: "admin" }
            ]
          }
        )
        ```

      - We edit the **mongo** config file to enable the _authenticatication_

        - In a server _bash_ we type `sudo nano /etc/mongod.conf`, and look for `#security` and change that line like this
          ```
          security:
            authorization: enabled
          ```

      - Now with `sudo systemctl restart mongod` enable the config we just edited

  - Now we can still opening `mongosh` but to run any command we need to authenticate

    - Before running `mongosh`

      ```
      mongosh --authenticationDatabase admin -u USER_NAME -p
      ```

      - Then it will ask for the password, enter it and that's all

    - Afert running `mongosh` (inside mongo shell)
      ```
      db.auth("<USER_NAME>", "<USER_PASSWORD>")
      ```

  - Is a _good security practice_ to create a **mongo user** for each app that only has access to each _database_

    - We connect to `mongosh` and _authenticate_ (one of the 2 way described just above)

    - Then we create a **database** for the _node app_ `use <APP_DATABASE_NAME>`

    - Then we create a **mongo user** for the **database**

      ```
      db.createUser(
        {
          user: "<APP_USER_NAME>",
          pwd: "<APP_USER_PASSWORD>",
          roles: [ { role: "readWrite", db: "<APP_DATABASE_NAME>" } ]
        }
      )
      ```

  - By default **mongod** does not automatically starts, in a server _bash_ run `sudo systemctl enable mongod`, to enable the autostart

- If we try to run in the _node app_ using `sudo -u apps -i` and `cd node-app` and `npm start` we will still have an **error** due to the **environment** variables the _node app_ is using

  - We can test if the _node app_ is working by adding temporally the **environment** variables needed

  - In a server _bash_ `sudo -u apps -i` and `cd node-app`

  - Then `export <VARIABLE_NAME>=<VARIABLE_VALUE>`, in the example i had to add these:

    ```
    MONGO_URI=mongodb://<APP_USER_NAME>:<APP_USER_PASSWORD>@localhost:27017/<APP_DATABASE_NAME>
    SESSION_SECRET=your secret here
    JWT_SECRET=your jwt secret here
    RABBITMQ_BROKER_URL=your rabbit mq url here
    ```

  - Then you can `npm start` and the _node app_ should be working, but, we are going to make this authomatic

- Install and set up **supervisor** as our _process manager_ to start and restart the _node app_ authomatically

  - In a server _bash_ we type `sudo apt install supervisor`, now **supervisor** is installed

  - Now we type `cd /etc/supervisor/conf.d` and `ls -l` to see that the folder is empty, and here we are going to create the config file for _node app_

  - We use `sudo nano node-app.conf` to open the text editor

  - In the text editor we copy the next text and edit the needed variables

    ```
    [program:node-app]
    command:<NODE_PATH> <STARTER_FILE>
    user=apps
    directory=/home/apps/node-app
    autostart=true
    autorestart=true
    environment=<ENV_VARIABLE_NAME_1>="<ENV_VARIABLE_VALUE_1>",<ENV_VARIABLE_NAME_2>="<ENV_VARIABLE_VALUE_2>",...
    ```

    - ADVICE: In a server _bash_ type `sudo -u apps -i`, `cd node-app` and `which node` to get the `<NODE_PATH>`

    - In the example
      ```
      [program:node-app]
      command:/home/apps/.nvm/versions/node/v23.10.0/bin/node ./bin/www
      user=apps
      directory=/home/apps/KC-WEB17-Backend-Avanzado-NODE-codesthenos
      autostart=true
      autorestart=true
      environment=MONGO_URI="mongodb://<APP_USER_NAME>:<APP_USER_PASSWORD>@localhost:27017/<APP_DATABASE_NAME>",SESSION_SECRET="your secret here",JWT_SECRET="your jwt secret here",RABBITMQ_BROKER_URL="your rabbit mq url here"
      ```

  - Now `sudo systemctl reload supervisor` we should have the server running successfully

  - To test it we could opening the **port** that the _node-app_ uses in **AWS**

- We are going to pruchase _free_ a subdomain in [**duckdns**](https://www.duckdns.org/)

  - You have to register, type `<SUBDOMAIN_NAME>` between `http://` and `.duckdns.org`

  - Then in the field **update ip** with `<YOUR_PUBLIC_AWS_INSTANCE_IP>`, and click on `update ip`

  - Now we have our own **subdomain** to use it in our server

- We are going to use **certbot** to create a _https_ certificate for our subdomain and set up the way to _auto revalidate_ cause this certificate only lasts 3 months

  - In a server _bash_ we type `sudo apt install certbot python3-certbot-nginx`

  - Now we type `sudo certbot --nginx`, this will create the certificates associated to our _nginx config files_

    - When you do that, it will ask you to type `<YOUR_EMAIL>` for security notifications

    - Then it asks you to accept the **Terms of Service**, just press `enter`

    - Then if you want to share data with them, you can type `N` or `Y` whatever you want and press `enter`

    - Then if you just press `enter` it will create a certificate for each _nginx config file_

  - With `sudo certbot --nginx renew`, we can revalidate our _certificates_ for other 3 months

    - With **cron** we can set up to run `sudo certbot --nginx renew` each month for example

      - We go to `cd /etc/cron.weekly`

      - Create `sudo nano certbot-renew` file

        ```
        #!/bin/bash

        certbot --nginx renew
        ```

      - Give it the execute permmission `sudo chmod +x certbot-renew`

    - If we do this, we dont have to care about the https certificates

- We are going to use **nginx** as a _reverse proxy_ to serve _node app_ and the static files

  - Before doing this, to have good practices, we are going to create a **copy** of `/home/apps/node-app/public` in `/var/www/node-app-public`, the place from where we serve the statics with nginx

    ```
    sudo cp -r /home/apps/node-app/public /var/www/node-app-public
    ```

    ```
    sudo chown -R www-data:www-data /var/www/node-app-public
    ```

  - We create a _config_ file in the `/etc/nginx/site-aviable/` folder called **node-app**

  - In the _bash_ of the server, we type `sudo nano /etc/nginx/site-aviable/node-app`

  - In the text editor we type

    ```
    server {
      listen 80;
      server_name <YOUR_SUBDOMAIN>;

      location ~* \.(css|js|png|jpg|jpeg|gif|ico|html)$ {
        root /var/www/node-app-public;
        access_log off;
        expires max;
        add_header x-owner <YOUR_GITHUB_USERNAME>;
      }

      location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_redirect off;
      }

    }
    ```

  - From here, follow the same steps we did when created the first time a **nginx config file**, but before `sudo systemctl reload nginx` run `sudo systemctl daemon-reload`

- At this point we are done and the **assingment** should be passed, but lets make some imporvements

- Change SSH port which is by default **22**, to `<THE_PORT_YOU_WANT>`, to make less accessible by bots your server (Check **AWS** extra config to see how to enable and disable a port in AWS)

  - Before change this config, be sure to do a **snapshot** (check **AWS** extra config to see how to), to have a way to backup from an **error**, this is crucial, the **ssh** is the way we are connecting all time to the server with the terminal

  - We create a _backpup_ file with `sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.back`

  - Now we `sudo nano /etc/ssh/sshd_config`, and just look for the line `#Port 22` and change it for `<THE_PORT_YOU_WANT>`

  - Run `sudo systemctl daemon reload`, and then `sudo systemctl restart ssh`

  - If all was ok, when connect now you have to type `ssh -p <THE_PORT_YOU_WANT> -i <PATH_TO_KEY_FILE.pem> ubuntu@<YOUR_PUBLIC_AWS_INSTANCE_IP>`, or see the **optional config at the end**

  - Remember to delete the port 22 in **AWS**

- Another good practice is to hide the _nginx version_ and install a service like **fail2ban** that by default search for malicious ip and temporally **bans** them

  - In a server _bash_ type `sudo nano /etc/nginx/nginx.conf`, look for and uncomment `# server_tokens off;` and the `Gzip` Settings, `sudo systemctl reload nginx`

  - To install **fail2ban** `sudo apt install fail2ban`, cause we changed the default ssh port

    - We should edit `port    = ssh` for `port    = <THE_PORT_YOU_WANT>` in the file `/etc/fail2ban/jail.conf`

- In a server _bash_ we type `sudo -u apps -i` and `cp -r /home/apps/node-app/microservice /home/apps/image-resize` to copy the **microservice** folder we had inside the node-app

  - After test with `cd image-resize`, `npm i`, `export RABBITMQ_BROKER_URL=yourrabbitmqbrokerurlhere` and `node index.js`

  - If you have in your [**RabbitMQ**](https://rat.rmq2.cloudamqp.com/) account linked the _exchange_ with the _queue_

  - You can see all is working, now we just create a new config file in **supervisor** like we did for the node-app before

- TODO DOCKERFILE Y/O DOCKER-COMPOSE

## EXTRA CONFIG NEEDED IN [AWS](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Instances:)

- Enable the **http** port in _AWS_ to enable http _requests_ to out server

  - Go to [**Instances**](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Instances:) and select the _Instance_ (mark the checkbox)

  - Click on **Security** tab, click on the link under **Security groups**

  - In **Inbound rules**, click on **Edit inbound rules**, click on **Add rule**

  - Fill the form, **Type**: `HTTP`, **Source**: `Anywhere-IPv4`, click on **Save rules**

- Each instance has for **Free** only one `Elastic IP`, and you wont be charged, but if you have one `Elastic IP` without being binded to any _instance_, you will be charged for it

  - Making the server `<YOUR_PUBLIC_AWS_INSTANCE_IP>` to be the same allways

    - Go to [**Elastic IPs**](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Addresses:), click on `Allocate Elastic IP address`, click on `Allocate`

    - Select the _elastic ip_ (marck the checkbox), click on `Actions`, click on `Associate Elastic IP address`

    - Fill **Instance**: `<YOUR_INSTANCE>`, click on `Associate`

- Create a **snapshot** in _AWS_ to create a backup

  - Go to [**Volumes**](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Volumes:) and select the _Volume_ (mark the checkbox)

  - Click on `Actions`, and click on `Create snapshot`

  - Fill **Description**: `<SNAPSHOT_DESCRIPTION>`, and click on `Create snapshot`

  - For this service after the 12 _free tier_ you can be charged, so remember to delete it when needed

    - Go to [**Snapshots**](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Snapshots:) and select the _Snapshot_ (mark the checkbox)

    - Click on `Actions`, and click on `Delete snapshot`, fill the input with `delete`, and press `enter`

## OPTIONAL CONFIG

- Creating a confing file to connect

  - We open a _bash_ and to make sure we are in our `HOME USER` we use the command `cd`

  - Here he have the `.bash` folder, to create the **config** file

    ```
    nano .ssh/config
    ```

  - This creates the file **config** and opens a text editor in the _bash_

  - In the text editor we type

    ```
    Host <NAME>
       HostName <YOUR_PUBLIC_AWS_INSTANCE_IP>
       User ubuntu
       IdentityFile <PATH_TO_KEY_FILE.pem>
       Port 2405
    ```

  - To save the changes and exit the text editor press **ctrl+x**, **y** and **enter**

  - To try this out enter this command in the _bash_
    ```
    ssh <NAME>
    ```
