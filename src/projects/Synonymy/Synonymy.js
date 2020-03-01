import React from 'react';
import classes from './Synonymy.module.css';
import projectClasses from '../projectStyles.module.css';

import githubIcon from '../../images/github.svg';
import linkIcon from '../../images/link.svg';

export default function Synonymy() {
    return <div>

        <h2 className={projectClasses.ProjectHeader}>Synonymy</h2>
        <img src={linkIcon} className={projectClasses.LinkIcon}/>
        <img src={githubIcon} className={projectClasses.GithubIcon}/>
        <h3>Description</h3>
        <p className={projectClasses.ProjectParagraph}>Synonymy is a web application that finds overused words in your essays and recommends synonyms. It works by looking for words in your essay in a list of English words ranked from most to least used. Because words in English follow a Zipf distribution, it uses that word's rank in this list to find the word's expected use in day to day language. Next, it compares the expected usage to the usage in your essay to come up with a score (how overused it perceives a word to be). Finally, it ranks the words from most to least overused and finds synonyms for the top ten, highlighting their instances within the essay.</p>
        
        <h3>Challenges</h3>
        <p className={projectClasses.ProjectParagraph}>Implementing all text-searching functionality on the client proved to be difficult. The web app parses all words locally and only sends a request for ten synonyms.An issue came from refreshing the search after the user stops typing. Initially, the web app would send a new request for ten words on each search, regardless of whether or not there were any new words to get synonyms for. To solve this issue, I had all loaded synonyms stored in redux and made a second action creator specifically for refreshing a search that would ignore words with synonyms already loaded and would bypass the request entirely if no new words show up in the top ten.</p>

    </div>
}
