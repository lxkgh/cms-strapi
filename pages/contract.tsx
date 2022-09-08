import Image from 'next/image';
import bg from '../public/bg/contract.png';
// import qrcode from '../public/favicon/apple-touch-icon.png';
import CallIcon from '../components/call'
import s from './contract.module.css';
export default function Contract() {
    return (
        <div className={s.root}>
            <div className={s.header}>
                <Image src={bg} layout="responsive" alt="联系我们" />
                <p className={s.headerTitle}>联系我们</p>
            </div>
            <div className={s.contractContainer}>
                <CallIcon className={s.contractIcon}/>
                <div className={s.contract}>
                    <p className={s.contractS1}>如微信回复较慢，请拨打我们的客服热线</p>
                    <p className={s.contractS2}>400-028-2788</p>
                    <p className={s.contractS3}>会有人工客服直接跟您沟通，感谢您对租葛亮的支持!</p>
                </div>
                <div className={s.bottomContaner}>
                    {/* <Image src={qrcode} layout="responsive" alt="二维码" /> */}
                    <div>
                        <p>请扫码关注</p>
                        <p>租葛亮微信公众号</p>
                        <p>让企业更轻松！</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}