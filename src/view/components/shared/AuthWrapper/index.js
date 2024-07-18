import './index.css'

const AuthWrapper = ({coverImg, children}) => {
    return (
        <div className="auth_style_wrapper">
            <div style={{backgroundImage: `url(${coverImg})`}}
                className="cover_img_container"
            />

            <div className='form_container'>
                {children}
            </div>
        </div>
    )
}

export default AuthWrapper