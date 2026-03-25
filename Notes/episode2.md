# NPM - igniting our app
- NPM is package manager which manages all packages.
- npm init
- npm init command generate package.json file and configure our project with NPM.
- package.json file is basically a configuration for NPM (Dependecies/packages).

# Bundler - (Parcel, Veet) - Question
- We need to bundle all code to push it to production.
- Parcel is node package. command :- npm install -D parcel
- [-D] there is 2 types of dependecies.
    1. Dev Dependecies. used in development phase.
    2. Normal Dependecies. used in production.
        "devDependencies": {
            "parcel": "^2.16.4"
        }
    3. What is ^ [carade] sign meaning ? - It will automatically update latest minor version.
    4. What is ~ [tilde] sign ? - It will automatically install MAJOR vesion.
- After parcel command . package-lock.json file generate.
- Package-lock.json file keeps track the dependecies of version.

# node_modules 
- node modules have all code of dependecies, which npm fetch.
- Its like a database. our project has parcel dependecy but parcel has its own dependecies.


# what is module tag meaning - Question
- <script type="module" src="./App.js"></script>
- If you dont add type="module" attribute then its not working and giving
  you error -> Browser scripts cannot have imports or exports.

# Parcel - 
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Parcel use File watching algorithm written in C++
- Parcel is also Caching things - and gives Faster Builds
- Image Optimization
- Minification
- Bunduling
- Compress file - remove whitespaces
-  

# why react App Is Fast - Question




