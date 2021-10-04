# Instant App Boilerplate
A React Client and a Node back end, configured to run on a multi-scaling Docker container

An Express-server to run the API and React-Router for the Client, it's set-up ready to add code to.

# TOC
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:0 orderedList:0 -->
- [Instant App Boilerplate](#instant-app-boilerplate)
- [TOC](#toc)
- [Installation](#installation)
  - [Docker Quick Start](#docker-quick-start)
    - [1. Install Docker](#1-install-docker)
      - [Hello World](#hello-world)
    - [2. Building the application for the first time](#2-building-the-application-for-the-first-time)
- [Running the application](#running-the-application)

# Installation
This is a one line spin up (for both client and API)
Unfortunately, the only thing you'll need to do is install is Docker

## Docker Quick Start
### 1. Install Docker
- ### Linux
  1. Open a terminal.
  2. To install Docker, run: `curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh && sudo groupadd docker && sudo usermod -aG docker ${USER}`
  3. To install docker-compose, run: `sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose`
  4. reboot your machine to apply the changes: `sudo reboot`
- ### Windows
  Navigate to https://hub.docker.com/editions/community/docker-ce-desktop-windows/
  Download and run the installer
- ### Mac
  Navigate to https://docs.docker.com/docker-for-mac/install/
  Download and run the installer

#### Hello World
To ensure that docker has been set up correctly.
Open a terminal.
 - Confirm docker installation, run: `docker version`
 - (Linux only) Confirm docker compose installation, run: `docker-compose --version`
 - Confirm docker configured correctly, run: `docker container run hello-world`

Both commands should have run succesfully.

### 2. Building the application for the first time
**Note:** (linux distros) run `docker-compose` as opposed to `docker compose`
1. (Mac | Windows) Run: `docker compose up --build` (Linux) Run: `docker-compose up --build`

# Running the application
From the root directory
- Start the App: `docker compose up`
- Stop the App: `ctrl+c`
- Clean up when you're done: `docker compose down`

The API can be accessed at http://localhost:8080
The React App can be accessed at http://localhost:3001
