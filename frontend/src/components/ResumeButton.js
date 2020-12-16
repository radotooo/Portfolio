import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import './styles/resume-button.css';

export default function ResumeButton() {
  const resumeIcon = (
    <FontAwesomeIcon className="resume__icon" icon={faFileDownload} />
  );

  return (
    <>
      <a href="Radislav-Danev-Resume.pdf" download>
        {resumeIcon} Resume
      </a>
    </>
  );
}
