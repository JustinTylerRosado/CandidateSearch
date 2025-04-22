import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: Candidate;
  onAccept?: () => void;
  onReject?: () => void;
}

const CandidateCard = ({ candidate, onAccept, onReject }: CandidateCardProps) => {
  return (
    <div className="candidate-card" style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
      <img src={candidate.avatar_url} alt={candidate.login} width={80} />
      <h2>{candidate.name || candidate.login}</h2>
      <p>Location: {candidate.location || 'N/A'}</p>
      <p>Email: {candidate.email || 'N/A'}</p>
      <p>Company: {candidate.company || 'N/A'}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
      {onAccept && <button onClick={onAccept}>+</button>}
      {onReject && <button onClick={onReject}>-</button>}
    </div>
  );
};

export default CandidateCard;