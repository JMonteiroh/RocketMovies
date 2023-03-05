import { Container } from './styles';

export function Button({icon: Icon, title, loading = false, ...rest}) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title }
      {Icon && <Icon size={20} />}
    </Container>
  );
}