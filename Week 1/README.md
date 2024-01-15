# Week 1

## Course Dependencies

### Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Github

```bash
git clone https://github.com/ryandschaefer/gui-instruction.git
```

### NodeJS

```bash
brew install node
```

### React

```bash
npm -g install create-react-app
```

### React Developer Tools Chrome Extension

https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## Project Dependencies

### Github

https://github.com/stephbuon/democracy-viewer-demo

```bash
git clone https://github.com/stephbuon/democracy-viewer-demo.git
```

### Docker

https://docs.docker.com/desktop/install/mac-install/

```bash
brew install docker-compose
```

### R

https://cran.r-project.org/bin/macosx/

### Python

```bash
brew install python
```

### Libraries

```bash
# Frontend
cd frontend
# JavaScript
npm install

# Backend
cd ../backend
# JavaScript
npm install
# Python
pip install -r requirements.txt
# R
Rscript requirements.R
```

### SMU VPN

The backend of the app will not run unless you are either on SMU campus or are connected to the VPN. To install the VPN, follow the steps in the link below:

https://www.smu.edu/oit/services/vpn

### Backend Environment

To configure the backend environment, create a file in the ```backend``` folder called ```.env```. Reach out to me once you have reached this step, and I will tell you what to put in this file. This file contains security information that I do not want to post on a public GitHub repository.

## Run the App

Use one of the following methods to run the app. The instructions assume you are starting in the root folder.

### Option 1: Separate Tabs

Open two command line tabs and run the following commands.

```bash
# Tab 1: backend
cd backend
node index
```

```bash
# Tab 2: frontend
cd frontend
npm start
```

### Option 2: Docker

```bash
sudo docker-compose up
```

The docker option will take longer to run for the first time, as it is creating a new isolated environment on you computer to run the app called a container and reinstalling dependencies. It should run quickly after the first run. If you do not want to deal with this, just use option 1.

Let me know if you have trouble with any of the steps in this document.
