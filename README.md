# Vitaran-V2
Revolutionizing Supply Chain Management with Blockchain Technology: Introducing Vitran - An Ethereum-powered System with Next.js Frontend

The supply chain management industry is in dire need of a comprehensive solution that addresses the many challenges that it faces, such as inefficiency, lack of transparency, and fraud. With the advent of blockchain technology, it is now possible to revolutionize this industry and bring it into the modern age.

Vitran is a cutting-edge supply chain management system that leverages the power of blockchain technology and the Ethereum ecosystem to provide a secure, efficient, and transparent solution. Our system is designed to address the many challenges faced by supply chain management, such as fraud, inefficiency, and a lack of transparency. With Vitran, you can have confidence that your supply chain is secure and that the products you receive are genuine.

At the heart of Vitran is the Ethereum blockchain, which provides a secure and decentralized platform for the storage and transfer of information. Our system leverages the power of smart contracts to automate the process of tracking and verifying the authenticity of products as they move through the supply chain. This ensures that every step of the supply chain is transparent and can be audited at any time.

In addition to its powerful backend, Vitran also features a sleek and user-friendly frontend that is built using the Next.js framework. This allows for fast and responsive interactions with the system, making it easy for users to access the information they need in real-time. The frontend is designed to be accessible and intuitive, allowing even those who are new to blockchain technology to easily navigate the system.

With Vitran, you can be confident that your supply chain is secure and that your products are genuine. Our system is designed to provide you with the tools you need to manage your supply chain with ease, while also providing you with the peace of mind that comes from knowing that your data is secure and your products are authentic.

So why wait? Take your supply chain management to the next level with Vitran. Start using our cutting-edge system today and experience the many benefits of blockchain technology for yourself.

https://camo.githubusercontent.com/d4c52e8e232cf1e034e786ada3be406cde87a72b6389d6346c5a26c0c3babc76/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6473746d73693871762f696d6167652f75706c6f61642f76313635323836373337392f537570706c79253230436861696e2f476974687562253230526561646d652f72657075746174696f6e5f73797374656d5f77756d7a69662e706e67


# Next.js Starter Project

This is a starter project for React that uses Next.js.

* Authentication via Email, Facebook, Twitter and Google+
* Uses Express combined with Passport JS for authentication and route handling
* Account management - Update details, link/unlink accounts, delete account
* Session support with secure HTTP Only cookies and CSRF Tokens
* SASS/SCSS wth Bootstrap 4 and Reactstrap with Bootstrap components for React
* Comes with Ionicons icon font and shows how to bundle other CSS and font files

You can see a live demo at **https://nextjs-starter.now.sh**

## About 

Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack or babel and with automatic routing and without the constraints of projects like Create React App.

This is a starter project that provides an example of how to use Next.js with Express, SASS/SCSS, Bootstrap, Reactstrap (Boostrap 4 for React), the Ionicons icon set, examples of how to include data from remote REST APIs and incorporate an authentication system that supports both oAuth and Email using Passport (a popular authentication framework for Node.js).

This project exists to make it easier to get started a creating production app in React. You are invited to use it as a reference or to copy it and use it as a base for your own projects. Contributions to improve this project are welcome.

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/iaincollins/nextjs-starter.git
    npm install
    npm run dev

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

## Configuring

If you configure a .env file (just copy [.env.example](https://github.com/iaincollins/nextjs-starter/blob/master/.env.example) over to '.env' and fill in the options) you can configure a range of options.

See the [AUTHENTICATION.md](https://github.com/iaincollins/nextjs-starter/blob/master/AUTHENTICATION.md) for how to set up oAuth if you want to do that. It suggested you start with Twitter as it's the easiest to get working.

## Deploying to the cloud with now.sh

To deploy to production on [Zeit's now.sh cloud platform](https://zeit.co) you will need to install the `Now` desktop app on your computer. If you don't want to install the `Now` desktop app, you can use the following command to install it (either approach is fine):

    sudo npm i -g --unsafe-perm now

Once installed, open `now.json` and set a `name` and `alias` for your site.

To deploy, just run `now` in the working directory:

    npm install -g now
    now

If you configure a .env file `now` will include it when deploying if you use the -E option to deploy:

    now -E

If you want to have your local `.env` file have variables for local development and have a different sent of variables you use in production, you can create additional .env files and tell `now` to use a specific file when deploying:

    now -E production.env


### After deploying

Once you have deployed, `now` will return a URL where the site when it has been deployed to, you can use this to preview everything works correctly in the browser.

If you have set an alias for the site, you can then make the site live on the alias you have defined using `now alias`:

    now alias
    
By default, this will point any aliases you have set in `now.json` to your site.

You can configure `now` to use aliases with custom domains using the `now domain` and `now dns` commands.

----

## Further reading

### Database hosting

If you need an instance of MongoDB in the cloud https://mlab.com/ have free and inexpensive options.

### Secrets for Environment Variables

Once you are comfortable using `.env` files for configuration and running and deploying your app, take a look at `now secrets` to set options in the cloud so you don't have to set them each time you deploy.

### GitHub integration

You can integrate `now` with a GitHub account to trigger automated deployments anytime you push to GitHub. This works great if you have secrets set up!

### Now 2.0

When you deploy this project you will see this message as of November 2018:

    WARN! You are using an old version of the Now Platform. More: https://zeit.co/docs/v1-upgrade

Now 2.0 was released in November 2018 and works differently from Now 1.0. This project has not been updated for Now 2.0. You may ignore this message for now.

### Alternate hosting options

You can host your Next.js site with any hosting provider. Although it works great on Now, it also works great with other providers like Heroku, Amazon Web Service, Google Cloud Platform, Microsoft Azure, DigitalOcean and others.
