// src/pages/Projects.js
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import './Projects.css';

// Import images
import project1Img1 from '../assets/ev_1.jpg';
import project1Img2 from '../assets/ev_2.jpg';

import project2Img1 from '../assets/ca_1.jpg';
import project2Img2 from '../assets/ca_2.jpg';
import project2Img3 from '../assets/ca_3.jpg';

import project3Img1 from '../assets/mrcode_2.jpg';


// Import other project images similarly

const projects = [
  {
    title: 'Evolution Simulation',
    image: project1Img2, // Thumbnail image for ProjectItem
    images: [project1Img1, project1Img2], // Array of images for the modal slideshow
    description: 'This project is a Python-based evolutionary simulation that visualizes autonomous entities (dots) moving on a board, seeking food and reproducing based on resource availability. The project demonstrates a simple evolutionary algorithm with principles of natural selection, mutation, and reproduction.',
    technologies: ['Python', 'PyQt5', 'Evolutionary Dynamics'],
    technologies_desc: [
      'Python: Core logic, algorithms, and object-oriented structure.',
      'PyQt5: GUI components, including the simulation board and real-time updates.',
      'Randomized Behavior: Randomized spawning locations and food consumption mechanics.',
      'Evolutionary Dynamics: Mutation and selection within a simple evolutionary algorithm framework.',
    ],
    features: [
      'Autonomous Dots: Entities (dots) navigate the board, searching for food. Their movement and reproduction depend on food consumption.',
      'Food Mechanics: Food items (green triangles) spawn periodically on the board. Dots that consume food can reproduce; those that deplete their food levels die.',
      'Evolutionary Algorithm: Each entity can mutate slightly when reproducing, simulating evolution and adaptation over time.',
      'Live Statistics: The UI displays real-time statistics for each dot, including its current food level and status (alive or dead).',
    ],
    usage: [
      'Start Simulation: Click the "Start Evolution" button in the GUI.',
      'Observe: Watch dots navigate towards food, reproduce, and adapt over time.',
      'Statistics: Check each dot’s food level and status on the side panel.',
    ],
            
    futureImprovements: [
      'Enhanced mutation mechanics with additional traits (e.g., speed, size).',
      'Smarter pathfinding or neural network integration.',
      'Expanded GUI features, including customizable settings for population and mutation rate.',
    ],
    githubRepo: 'https://github.com/bartbaranski/Project-Evolution',
  },


  {
    title: 'Crowd Analysis Application',
    image: project2Img1, // Thumbnail image for ProjectItem
    images: [project2Img1, project2Img2, project2Img3], // Array of images for the modal slideshow
    description: 'A Python-based application designed to analyze the size and density of crowds at public gatherings using real-time video processing and AI algorithms. This application leverages YOLO (You Only Look Once) for object detection to count individuals in video frames, providing insights into the total participants and crowd density over time.',
    technologies: ['Python', 'PyTorch', 'YOLOv5', 'OpenCV', 'PostgreSQL'],
    technologies_desc: [
      'Programming Language: Python',
      'Machine Learning Framework: PyTorch (YOLOv5 model for object detection)',
      'GUI Framework: Tkinter',
      'Data Processing and Visualization: OpenCV, Matplotlib',
      'Database: PostgreSQL',
    ],
    features: [
      'Real-Time Video Processing: Analyzes video frames to detect and count people in crowds.',
      'User Interface: Simple GUI built with Tkinter for selecting videos and viewing analysis results.',
      'Data Visualization: Real-time graph showing the cumulative count of people detected in video frames.',
      'Frame Counter: Displays the current and total frames for easy tracking of the analysis process.',
      'Database Storage: Stores video and analysis metadata in PostgreSQL for easy retrieval and reporting.',
    ],
    usage: [
      
    ],
            
    futureImprovements: [
      'Advanced Object Tracking: Implement SORT or DeepSORT for improved accuracy in crowded scenes.',
      'Additional Analysis Metrics: Include more in-depth statistics, such as participant age and movement tracking.',
      'Export Reports: Enable export of detailed reports in PDF or CSV format for further analysis.',
    ],
    githubRepo: 'https://github.com/bartbaranski/Crowd-Analyser',
  },

  {
  title: 'Morse Code Converter',
    image: project3Img1, // Thumbnail image for ProjectItem
    images: [project3Img1], // Array of images for the modal slideshow
    description: 'This project provides a Python GUI that allows users to enter text, convert it to Morse code, and transmit the Morse code to an Arduino device via a serial connection. The Arduino then interprets and displays the Morse code on an LCD screen and generates audio or visual signals.',
    technologies: ['Python', 'PySerial', 'PyInstaller', 'Arduino',],
    technologies_desc: [
      'Programming Language: Python, C - Arduino',
      'PySerial (for serial communication)',
      'PyInstaller (for converting Python scripts to executables)',
      'Arduino with LCD and LED setup',
    ],
    features: [
      'Convert any text input to Morse code.',
      'Send Morse code to an Arduino using a serial connection.',
      'Display Morse code visually on an LCD and via LED signals on the Arduino.',
    ],
    usage: [
      'An LCD screen (for displaying Morse code text)',
      'LED and buzzer connections (for visual and auditory Morse code signaling)',
      'Correct wiring and configuration to support the code',
      
    ],
            
    futureImprovements: [
      
    ],
    githubRepo: 'https://github.com/bartbaranski/Morse-Code-Decoder',
  },
  
];

function Projects() {
  return (
    <div className='page-content'>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
