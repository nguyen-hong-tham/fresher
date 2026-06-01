import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import { useNavigate } from 'react-router-dom';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

// Mock Particle component
jest.mock('../Particle', () => {
  return function MockParticle() {
    return <div data-testid="particle">Particle Component</div>;
  };
});

describe('ProjectDetail Component - Back Button Test', () => {
  let mockNavigate;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Mock useParams for slug-based routing
    const { useParams } = require('react-router-dom');
    useParams.mockReturnValue({ projectSlug: 'may-coffee' });
    
    // Mock useNavigate
    mockNavigate = jest.fn();
    const { useNavigate } = require('react-router-dom');
    useNavigate.mockReturnValue(mockNavigate);
  });

  test('Nút "Back to Projects" phải hiển thị', () => {
    render(
      <BrowserRouter>
        <ProjectDetail />
      </BrowserRouter>
    );

    const backButton = screen.getByText(/Back to Projects/i);
    expect(backButton).toBeInTheDocument();
    console.log('✅ Nút "Back to Projects" hiển thị OK');
  });

  test('Bấm nút "Back to Projects" phải gọi navigate("/projects")', async () => {
    render(
      <BrowserRouter>
        <ProjectDetail />
      </BrowserRouter>
    );

    const backButton = screen.getByText(/Back to Projects/i);
    console.log('🔍 Tìm nút Back button:', backButton);
    
    // Bấm nút
    fireEvent.click(backButton);
    console.log('✅ Đã bấm nút Back');

    // Chờ xem navigate có được gọi không
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/projects');
      console.log('✅ navigate("/projects") được gọi OK');
    });
  });

  test('Nút "Back to Projects" phải là Button element', () => {
    render(
      <BrowserRouter>
        <ProjectDetail />
      </BrowserRouter>
    );

    const backButton = screen.getByRole('button', { name: /Back to Projects/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveClass('btn', 'btn-primary');
    console.log('✅ Nút là Button element với class btn-primary OK');
  });

  test('Project detail hiển thị đúng khi có project slug', () => {
    render(
      <BrowserRouter>
        <ProjectDetail />
      </BrowserRouter>
    );

    // Kiểm tra project title (bằng regex để khớp tự do hơn)
    const projectTitle = screen.getByText(/MAY Coffee/i);
    expect(projectTitle).toBeInTheDocument();
    console.log('✅ Project MAY Coffee hiển thị OK');
  });
});
