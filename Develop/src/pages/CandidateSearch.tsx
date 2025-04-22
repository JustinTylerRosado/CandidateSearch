import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  // 1) get a randomized list of GitHub usernames
  useEffect(() => {
    (async () => {
      const users: any[] = await searchGithub();
      setUsernames(users.map(u => u.login));
    })();
  }, []);

  // 2) whenever index changes, fetch that user’s full details
  useEffect(() => {
    if (currentIndex < usernames.length) {
      (async () => {
        const full: any = await searchGithubUser(usernames[currentIndex]);
        setCandidate(full as Candidate);
      })();
    } else {
      setCandidate(null);
    }
  }, [usernames, currentIndex]);

  // 3) accept: save to localStorage, then advance
  const handleAccept = () => {
    if (!candidate) return;
    const saved: Candidate[] = JSON.parse(
      localStorage.getItem('savedCandidates') || '[]'
    );
    saved.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(saved));
    setCurrentIndex(i => i + 1);
  };

  // 4) reject: just advance
  const handleReject = () => {
    setCurrentIndex(i => i + 1);
  };

  if (candidate === null) {
    return <p>No more candidates available.</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <img
        src={candidate.avatar_url}
        alt={candidate.login}
        width={120}
        style={{ borderRadius: '50%' }}
      />
      <h2>{candidate.name || candidate.login}</h2>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
      <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
      <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
      <p>
        <strong>Profile:</strong>{' '}
        <a href={candidate.html_url} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </p>

      <button onClick={handleAccept} style={{ marginRight: '0.5rem' }}>
        +
      </button>
      <button onClick={handleReject}>–</button>
    </div>
  );
};

export default CandidateSearch;
