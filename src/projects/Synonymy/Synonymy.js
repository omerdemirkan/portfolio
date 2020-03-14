import React, { useState } from 'react';
import classes from './Synonymy.module.css';
import projectClasses from '../projectStyles.module.css';

// Images
import githubIcon from '../../images/github.svg';
import linkIcon from '../../images/link.svg';
import react from '../../images/technologies/react.svg';
import redux from '../../images/technologies/redux.svg';
import node from '../../images/technologies/node.svg';
import express from '../../images/technologies/express.svg';

// Gifs
import gif1 from '../../images/gifs/synonymy-gif-1.gif';
import gif2 from '../../images/gifs/synonymy-gif-2.gif';

export default function Synonymy() {

    // Functionality that allows user to browse gifs. I know its janky, but I'm in a hurry.
    const [gifNum, setGifNum] = useState(1);

    const nodeList = <>
        <span className={projectClasses.Node} onClick={() => setGifNum(1)} style={gifNum === 1 ? {opacity: 1} : null}></span>
        <span className={projectClasses.Node} onClick={() => setGifNum(2)} style={gifNum === 2 ? {opacity: 1} : null}></span>
    </>;


    return <div className={projectClasses.Project}>
        <div className={projectClasses.Main}>
            <h1 className={projectClasses.ProjectHeader}>Synonymy</h1>

            <a href='https://synonymy-app.herokuapp.com/' target='_blank'><img src={linkIcon} className={projectClasses.LinkIcon}/></a>
            <a href='https://github.com/omerdemirkan/synonymy' target='_blank'><img src={githubIcon} className={projectClasses.GithubIcon}/></a>
            
            <div className={projectClasses.TextSection}>
                <h3>Description</h3>
                <p className={projectClasses.ProjectParagraph}>Synonymy is a web application that finds overused words in your essays and recommends synonyms. It works by looking for words in your essay in a list of English words ranked from most to least used. Because words in English follow a Zipf distribution, it uses that word's rank in this list to find the word's expected use in day to day language. Next, it compares the expected usage to the usage in your essay to come up with a score (how overused it perceives a word to be). Finally, it ranks the words from most to least overused and finds synonyms for the top ten, highlighting their instances within the essay.</p>
                
            </div>
            
            <div className={projectClasses.TextSection}>
                <h3>Challenges</h3>
                <p className={projectClasses.ProjectParagraph}>Implementing all text-searching functionality on the client proved to be difficult. The web app parses all words locally and only sends a request for ten synonyms.An issue came from refreshing the search after the user stops typing. Initially, the web app would send a new request for ten words on each search, regardless of whether or not there were any new words to get synonyms for. To solve this issue, I had all loaded synonyms stored in redux and made a second action creator specifically for refreshing a search that would ignore words with synonyms already loaded and would bypass the request entirely if no new words show up in the top ten.</p>

            </div>

            <div className={projectClasses.SubSection}>
                <h3>Technologies</h3>
                <div className={projectClasses.TechnologiesBox} style={{width: '70%'}}>
                    <img src={react}/>
                    <img src={redux}/>
                    <img src={node}/>
                    <img src={express}/>
                </div>
                
            </div>

            <div className={projectClasses.SubSection}>
                <h3>Contributors</h3>
                <a href='https://github.com/omerdemirkan' target='_blank'>
                    <img 
                    src='https://avatars2.githubusercontent.com/u/54616154?s=460&u=0dce50d86a6ce79649cb045b5da9127c3cc00bad&v=4'
                    className={projectClasses.Contributor}
                    />
                </a>
            </div>
            
        </div>

        <div className={projectClasses.GifsSection}>
            <h3>See It In Action!</h3>
            <div className={projectClasses.NodeBox}>
                {nodeList}
            </div>
            <img src={gif1} style={gifNum === 1 ? {display: 'inline-block'} : null}/>
            <img src={gif2} style={gifNum === 2 ? {display: 'inline-block'} : null}/>
            
        </div>
        
    </div>
}