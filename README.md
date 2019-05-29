## FETCHDNS

### A simple DNS tool built using ES6 node-fetch, React and Google's HTTPS DNS API

### Now with **TYPESCRIPT!**

#### Host it on Your Own

You can host this whereever you want if you don't want to the totally awesome free version right here on GitHub, or you
just wanna hack away at it and make it your own.

##### Clone

```bash
git clone https://github.com/methodbox/fetchDNS.git

cd fetchDNS
```

##### Set Base URL

You need to set the base URL in `package.json` to use this somewhere other than GitHub.

```ts
//  In package.json, edit the "homepage" property and set it to your site's root URL
{
  "name": "fetch-dns",
  "version": "2.0.1",
  "private": true,
  //  Change this.
  "homepage": "https://methodbox.github.io/fetchDNS",  //  For Google.com use https://google.com. No trailing slash
  "dependencies": {
    ...
  }
  ...
}
```

##### Install Dependencies

You need to install NodeJS (whatever the LTS version is right now will work fine) - https://nodejs.org/.
(It only takes like 2 minutes).

Then install the module dependencies.

```bash
cd fetchDNS
npm install
```

##### Build the Static Site

Now you need to create a build to run on your server. This will create the `build` directory in your `fetchDNS` directory.
This folder is the root of your site. Dump these files on a server and presto! Your own DNS page (which I made, but that's cool).

```bash
cd fetchDNS
npm run build
```
