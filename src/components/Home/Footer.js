import { GithubOutlined,LinkedinOutlined} from '@ant-design/icons';

function Footer() {
  return(
    <div className="footer">
      <div className="footerContainer">
        <p className="textfooter">© 2023 Gabriela Arnott</p>
        <div className="social-media-wrapper">
            <a href="https://github.com/Spanglishgaby/FomoApp" 
            className="iconFooter"><GithubOutlined className="fab"/></a> 
            <a href="https://www.linkedin.com/in/gabrielayuriko/" 
            className="iconFooter"><LinkedinOutlined className="fab"/></a>
        </div>
      </div>
    </div>
  )
}
export default Footer;