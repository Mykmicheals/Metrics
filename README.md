# Metrics

This is website was created to reproduce a figma design

## Clone the project

- In your preffered folder, open your terminal and type the command

## `` git clone https://github.com/Mykmicheals/gmailClone.git ``

- After cloning the project unzip the folder

- Navigate to the folder using

## `` cd my-app ``

- Install all dependencies using

## `` npm install ``

- to run project on your localhost use the command

## `` npm start ``

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Project folder structure

![metricfolder](https://user-images.githubusercontent.com/88559940/193783931-9a7fb0ed-0f2a-4346-a28a-f04a96251633.png)


- The public folder contains the index.html and the manifest.json file
- The src folder is the most important folder of this app. It contains all building block of the app
- inside the src folder we have the assets folder, the assets folder is used to store the images and the icons
- component folder is used to store the reusable react components
- Screens folder stores the various components for a particular page. I.e homeScreen stores all react components for the homepage
- Store folder is used to store the our app wide state for state management 


## The UI

### Homepage

![metrics1](https://user-images.githubusercontent.com/88559940/193781047-e3693bad-0394-49ad-b5b8-d20f64a566c1.png)

### Contact Overlay

![overlayHeader](https://user-images.githubusercontent.com/88559940/193781104-6585f480-3fce-4edb-a98e-d16e0a45fd6c.png)

### About Page

![about1](https://user-images.githubusercontent.com/88559940/193781154-23aec277-9263-416c-bbe8-7d1b5a9b9626.png)

![about2](https://user-images.githubusercontent.com/88559940/193781171-652de757-c900-440f-844d-18510318eccc.png)

![about3](https://user-images.githubusercontent.com/88559940/193781210-6936a3c8-0f3c-44a4-bf7a-cd1da042c36e.png)

### Blog Page

![blog1](https://user-images.githubusercontent.com/88559940/193781321-493d479e-ad52-4393-969e-6aee2f1c5da0.png)

![blog2](https://user-images.githubusercontent.com/88559940/193781351-9a6bc4c5-8976-4d66-aa5a-67e240b8dc5e.png)


![blog3](https://user-images.githubusercontent.com/88559940/193781278-0602f226-b705-477f-bd02-b13b378b5b64.png)

### Libraries used for the Project

- React
- React Rounter 
- Html
- Scss

### Building Procedures

#### App.js File

![appFile](https://user-images.githubusercontent.com/88559940/193789674-0504a34a-41a0-4246-a422-2a3f0ad43000.png)

The App.js file contains all our screen component. All components are displayed in this file. React-router is used to navigate to various pages

#### Homescreen

![homeScreen](https://user-images.githubusercontent.com/88559940/193791263-b82ecb19-4e77-4556-a12c-6b83fcc4840d.png)

![homeScreen](https://user-images.githubusercontent.com/88559940/193791263-b82ecb19-4e77-4556-a12c-6b83fcc4840d.png)

The homescreen component contains all component for the HomeScreen 
- BlurCircle component is shows
- TimeCard component shows the countdown timer with the white background
- HomeFrom component contains the form for submitting to newsletter
- Show contact context is used to manage state for the show


#### AboutScreen

The css for the blur about page effect
![aboutBlur](https://user-images.githubusercontent.com/88559940/193797301-59af1867-65d4-4b10-8e08-870a4c859aa2.png)

