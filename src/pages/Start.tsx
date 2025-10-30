import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, UserPlus, LogIn } from 'lucide-react';

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-8">
        {/* Logo */}
        <div className="space-y-2">
          <div className="w-32 h-32 mx-auto bg-primary rounded-full flex items-center justify-center">
            {/* Placeholder for logo-mark.png - replace with actual image */}
            <div className="text-6xl font-bold text-primary-foreground">P</div>
          </div>
          <h1 className="text-4xl font-bold text-foreground">PulseLink AI</h1>
          <p className="text-lg text-muted-foreground">Your Digital Health Assistant</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link to="/signup" className="block">
            <Button className="w-full h-14 text-lg btn-primary rounded-xl shadow-medium">
              <UserPlus className="mr-2 h-5 w-5" />
              Sign Up
            </Button>
          </Link>

          <Link to="/login" className="block">
            <Button 
              variant="outline" 
              className="w-full h-14 text-lg rounded-xl border-2 hover:bg-primary/10"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Login
            </Button>
          </Link>

          <Link to="/quick-chat" className="block">
            <Button 
              variant="ghost" 
              className="w-full h-14 text-lg rounded-xl hover:bg-secondary/50"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Quick Chat (Guest)
            </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          AI-powered voice & chat assistant for seamless healthcare
        </p>
      </div>
    </div>
  );
};

export default Start;
