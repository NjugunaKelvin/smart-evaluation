import Forms from '@/components/Forms';

interface TenderApplyPageProps {
  params: {
    id: string;
  };
}

export default function TenderApplyPage({ params }: TenderApplyPageProps) {
  return (
    <div>
      <Forms tenderId={params.id} />
    </div>
  );
}