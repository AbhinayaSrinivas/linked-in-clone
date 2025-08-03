import React, { useState, useEffect } from 'react';
import { User, Plus, Home, MessageSquare, Calendar } from 'lucide-react';

// CSS Styles
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc'
  },
  loginContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  loginCard: {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: '2rem',
    width: '100%',
    maxWidth: '28rem'
  },
  logoContainer: {
    width: '4rem',
    height: '4rem',
    backgroundColor: '#2563eb',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem'
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box'
  },
  inputFocus: {
    borderColor: '#2563eb',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s',
    resize: 'none',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    fontSize: '1rem'
  },
  buttonHover: {
    backgroundColor: '#1d4ed8'
  },
  buttonDisabled: {
    backgroundColor: '#d1d5db',
    cursor: 'not-allowed'
  },
  linkButton: {
    color: '#2563eb',
    fontWeight: '500',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  demoBox: {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  header: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid #e5e7eb'
  },
  headerContainer: {
    maxWidth: '64rem',
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  headerLogo: {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#2563eb',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.5rem',
    transition: 'all 0.2s',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem'
  },
  navButtonActive: {
    backgroundColor: '#eff6ff',
    color: '#2563eb'
  },
  navButtonInactive: {
    color: '#6b7280'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    paddingLeft: '1rem',
    borderLeft: '1px solid #e5e7eb'
  },
  logoutButton: {
    fontSize: '0.875rem',
    color: '#dc2626',
    fontWeight: '500',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  main: {
    maxWidth: '64rem',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb',
    padding: '1.5rem',
    marginBottom: '1.5rem'
  },
  postForm: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  avatar: {
    width: '3rem',
    height: '3rem',
    backgroundColor: '#2563eb',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  avatarLarge: {
    width: '6rem',
    height: '6rem',
    backgroundColor: '#2563eb',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  avatarText: {
    color: 'white',
    fontWeight: '500'
  },
  avatarTextLarge: {
    color: 'white',
    fontWeight: '500',
    fontSize: '1.5rem'
  },
  postContent: {
    flex: 1
  },
  postActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '0.75rem'
  },
  postButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  postMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem'
  },
  authorName: {
    fontWeight: '500',
    color: '#111827',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  timestamp: {
    fontSize: '0.875rem',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  postText: {
    color: '#1f2937',
    lineHeight: '1.6'
  },
  emptyState: {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    border: '2px dashed #d1d5db',
    padding: '3rem',
    textAlign: 'center'
  },
  emptyStateTitle: {
    fontSize: '1.125rem',
    fontWeight: '500',
    color: '#111827',
    marginBottom: '0.5rem'
  },
  emptyStateText: {
    color: '#6b7280'
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem'
  },
  profileInfo: {
    flex: 1
  },
  profileName: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem'
  },
  profileEmail: {
    color: '#6b7280',
    marginBottom: '1rem'
  },
  profileBio: {
    color: '#1f2937',
    lineHeight: '1.6'
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  postItem: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '1rem'
  },
  postItemMeta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.75rem'
  }
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentView, setCurrentView] = useState('login');
  const [selectedUser, setSelectedUser] = useState(null);

  // Auth states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', bio: '' });
  const [newPost, setNewPost] = useState('');

  // Initialize with some demo data
  useEffect(() => {
    const demoUsers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        bio: 'Software Engineer passionate about building great products'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123',
        bio: 'Product Manager with 5+ years experience in tech startups'
      }
    ];

    const demoPosts = [
      {
        id: 1,
        userId: 1,
        content: 'Just launched my new React project! Excited to share it with the community.',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 2,
        userId: 2,
        content: 'Great networking event today! Met so many talented developers and designers.',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 3,
        userId: 1,
        content: 'Tips for junior developers: Always keep learning, ask questions, and build projects!',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      }
    ];

    setUsers(demoUsers);
    setPosts(demoPosts);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email.trim() || !loginForm.password.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    const user = users.find(u => u.email === loginForm.email && u.password === loginForm.password);
    if (user) {
      setCurrentUser(user);
      setCurrentView('feed');
      setLoginForm({ email: '', password: '' });
    } else {
      alert('Invalid credentials! Try john@example.com or jane@example.com with password: password123');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!registerForm.name.trim() || !registerForm.email.trim() || !registerForm.password.trim() || !registerForm.bio.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    if (users.find(u => u.email === registerForm.email)) {
      alert('User already exists!');
      return;
    }
    
    const newUser = {
      id: users.length + 1,
      ...registerForm
    };
    
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setCurrentView('feed');
    setRegisterForm({ name: '', email: '', password: '', bio: '' });
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      userId: currentUser.id,
      content: newPost,
      timestamp: new Date().toISOString()
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
    setSelectedUser(null);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const getUserById = (userId) => users.find(u => u.id === userId);
  const getUserPosts = (userId) => posts.filter(p => p.userId === userId);

  // Login Component
  if (currentView === 'login' && !currentUser) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginCard}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={styles.logoContainer}>
              <User size={32} color="white" />
            </div>
            <h1 style={styles.title}>Welcome Back</h1>
            <p style={styles.subtitle}>Sign in to your professional community</p>
          </div>

          <div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                style={styles.input}
                placeholder="your@email.com"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                style={styles.input}
                placeholder="Enter your password"
              />
            </div>
            <button
              onClick={handleLogin}
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Sign In
            </button>
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#6b7280' }}>
              Don't have an account?{' '}
              <button
                onClick={() => setCurrentView('register')}
                style={styles.linkButton}
              >
                Sign up
              </button>
            </p>
          </div>

          <div style={styles.demoBox}>
            <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Demo Accounts:</p>
            <p>• john@example.com / password123</p>
            <p>• jane@example.com / password123</p>
          </div>
        </div>
      </div>
    );
  }

  // Register Component
  if (currentView === 'register') {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginCard}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={styles.logoContainer}>
              <User size={32} color="white" />
            </div>
            <h1 style={styles.title}>Join Our Community</h1>
            <p style={styles.subtitle}>Create your professional profile</p>
          </div>

          <div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                value={registerForm.name}
                onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                style={styles.input}
                placeholder="John Doe"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                style={styles.input}
                placeholder="your@email.com"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={registerForm.password}
                onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                style={styles.input}
                placeholder="Create a password"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Bio</label>
              <textarea
                value={registerForm.bio}
                onChange={(e) => setRegisterForm({...registerForm, bio: e.target.value})}
                style={styles.textarea}
                placeholder="Tell us about yourself..."
                rows="3"
              />
            </div>
            <button
              onClick={handleRegister}
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Create Account
            </button>
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#6b7280' }}>
              Already have an account?{' '}
              <button
                onClick={() => setCurrentView('login')}
                style={styles.linkButton}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main App Layout
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.headerLeft}>
            <div style={styles.headerLogo}>
              <User size={24} color="white" />
            </div>
            <h1 style={styles.headerTitle}>Professional Network</h1>
          </div>
          
          <nav style={styles.nav}>
            <button
              onClick={() => { setCurrentView('feed'); setSelectedUser(null); }}
              style={{
                ...styles.navButton,
                ...(currentView === 'feed' ? styles.navButtonActive : styles.navButtonInactive)
              }}
            >
              <Home size={20} />
              <span>Feed</span>
            </button>
            
            <button
              onClick={() => { setCurrentView('profile'); setSelectedUser(currentUser); }}
              style={{
                ...styles.navButton,
                ...(currentView === 'profile' && selectedUser?.id === currentUser.id ? styles.navButtonActive : styles.navButtonInactive)
              }}
            >
              <User size={20} />
              <span>Profile</span>
            </button>
            
            <div style={styles.userInfo}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Hello, {currentUser.name}</span>
              <button
                onClick={handleLogout}
                style={styles.logoutButton}
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        {/* Feed View */}
        {currentView === 'feed' && (
          <div>
            {/* Create Post */}
            <div style={styles.card}>
              <div style={styles.postForm}>
                <div style={styles.avatar}>
                  <span style={styles.avatarText}>
                    {currentUser.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div style={styles.postContent}>
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share something with your network..."
                    style={styles.textarea}
                    rows="3"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.shiftKey) return;
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleCreatePost(e);
                      }
                    }}
                  />
                  <div style={styles.postActions}>
                    <button
                      onClick={handleCreatePost}
                      disabled={!newPost.trim()}
                      style={{
                        ...styles.postButton,
                        ...(newPost.trim() ? {} : styles.buttonDisabled)
                      }}
                    >
                      <Plus size={16} />
                      <span>Post</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            <div>
              {posts.map(post => {
                const author = getUserById(post.userId);
                return (
                  <div key={post.id} style={styles.card}>
                    <div style={styles.postForm}>
                      <div style={styles.avatar}>
                        <span style={styles.avatarText}>
                          {author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div style={styles.postContent}>
                        <div style={styles.postMeta}>
                          <button
                            onClick={() => { setSelectedUser(author); setCurrentView('profile'); }}
                            style={styles.authorName}
                          >
                            {author.name}
                          </button>
                          <span style={{ color: '#6b7280' }}>•</span>
                          <span style={styles.timestamp}>
                            <Calendar size={16} />
                            {formatTimestamp(post.timestamp)}
                          </span>
                        </div>
                        <p style={styles.postText}>{post.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {posts.length === 0 && (
              <div style={styles.emptyState}>
                <MessageSquare size={48} color="#9ca3af" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={styles.emptyStateTitle}>No posts yet</h3>
                <p style={styles.emptyStateText}>Be the first to share something with the community!</p>
              </div>
            )}
          </div>
        )}

        {/* Profile View */}
        {currentView === 'profile' && selectedUser && (
          <div>
            {/* Profile Header */}
            <div style={styles.card}>
              <div style={styles.profileHeader}>
                <div style={styles.avatarLarge}>
                  <span style={styles.avatarTextLarge}>
                    {selectedUser.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div style={styles.profileInfo}>
                  <h1 style={styles.profileName}>{selectedUser.name}</h1>
                  <p style={styles.profileEmail}>{selectedUser.email}</p>
                  <p style={styles.profileBio}>{selectedUser.bio}</p>
                </div>
              </div>
            </div>

            {/* User's Posts */}
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>
                <MessageSquare size={20} />
                Posts by {selectedUser.name}
              </h2>
              
              <div>
                {getUserPosts(selectedUser.id).map(post => (
                  <div key={post.id} style={styles.postItem}>
                    <div style={styles.postItemMeta}>
                      <span style={styles.timestamp}>
                        <Calendar size={16} />
                        {formatTimestamp(post.timestamp)}
                      </span>
                    </div>
                    <p style={styles.postText}>{post.content}</p>
                  </div>
                ))}
              </div>

              {getUserPosts(selectedUser.id).length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <MessageSquare size={48} color="#9ca3af" style={{ margin: '0 auto 1rem auto' }} />
                  <p style={styles.emptyStateText}>No posts yet from this user.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;