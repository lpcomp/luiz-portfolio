import avatar from '@/assets/images/me.jpg';
import { Content } from './styles';

const Avatar = () => {
  return (
    <Content>
        <div className="w3-display-container">
            <img
                src={avatar}
                alt="Avatar"
                loading="lazy"
                className='avatar-image'
            />
            <div
                className="w3-display-bottomleft w3-container w3-text-black avatar-name"            
            >
                <h2>Luiz Paulo</h2>
            </div>
        </div>
    </Content>
  );
}

export default Avatar;