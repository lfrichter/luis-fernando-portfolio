import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EducationCerts } from '../EducationCerts';

describe('EducationCerts Component', () => {
  it('renders academic education degrees and TCC details', () => {
    render(<EducationCerts />);

    expect(screen.getByText(/UNIBTA Centro Universitário/i)).toBeInTheDocument();
    expect(screen.getByText(/Universidade Anhembi Morumbi/i)).toBeInTheDocument();
    expect(screen.getByText(/Uma Abordagem de Processo de Negócio Utilizando BPMN/i)).toBeInTheDocument();
  });

  it('renders certifications and category filter', () => {
    render(<EducationCerts />);

    expect(screen.getByText(/SOLID Express/i)).toBeInTheDocument();
    expect(screen.getByText(/Certified ScrumMaster/i)).toBeInTheDocument();

    const awsCategoryBtn = screen.getByRole('button', { name: /Cloud Computing & AWS/i });
    fireEvent.click(awsCategoryBtn);

    expect(screen.getByText(/AWS - S3 and CloudFront/i)).toBeInTheDocument();
  });
});
