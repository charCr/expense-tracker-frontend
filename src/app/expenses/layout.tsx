import Header from '../../components/header/Header';
import '../../styles/globals.css';

export default function AddExpenseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
