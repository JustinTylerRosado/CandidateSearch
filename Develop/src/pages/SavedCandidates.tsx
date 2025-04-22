import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [saved, setSaved] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored: Candidate[] = JSON.parse(
      localStorage.getItem('savedCandidates') || '[]'
    );
    setSaved(stored);
  }, []);

  const handleRemove = (login: string) => {
    const filtered = saved.filter(c => c.login !== login);
    setSaved(filtered);
    localStorage.setItem('savedCandidates', JSON.stringify(filtered));
  };

  if (saved.length === 0) {
    return <p>No candidates have been accepted.</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      {saved.map(c => (
        <div
          key={c.login}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
          }}
        >
          <img
            src={c.avatar_url}
            alt={c.login}
            width={80}
            style={{ borderRadius: '50%' }}
          />
          <h2>{c.name || c.login}</h2>
          <p><strong>Username:</strong> {c.login}</p>
          <p><strong>Location:</strong> {c.location || 'N/A'}</p>
          <p><strong>Email:</strong> {c.email || 'N/A'}</p>
          <p><strong>Company:</strong> {c.company || 'N/A'}</p>
          <p>
            <strong>Profile:</strong>{' '}
            <a href={c.html_url} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </p>
          <button onClick={() => handleRemove(c.login)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;
