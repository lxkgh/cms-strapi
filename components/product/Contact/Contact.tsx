import { Button, Input, Popup } from 'antd-mobile';
import { FC, useState } from 'react';
import s from './Contact.module.css';
interface ContractProps {
    region: string;
}

const popupStyle = {
    minHeight: '14.75rem',
    borderTopLeftRadius: '0.63rem',
    borderTopRightRadius: '0.63rem',
    textAlign: 'center',
};
// eslint-disable-next-line no-unused-vars
const Contract: FC<ContractProps> = ({ region }) => {
    const [contractVisible, setcontractVisible] = useState(false);
    const [phone, setphone] = useState('');
    const handlePhoneVal = (val: string) => {
        if (isPhone(val)) {
            setphone(val);
        }
    };
    const isPhone = (val: string) => {
        const reg = /^(?:(?:\+|00)86)?1\d{10}$/;
        console.log(reg.test(val));
        return reg.test(val);
    };
    const handleSubmitPhone = () => {
        if (phone) {
            console.log('phone', phone);
        }
    };
    return (
        <div className={s.contactContainer}>
            <Button
                onClick={() => {
                    setcontractVisible(!contractVisible);
                }}
                className={s.rentBtn}
            >
                一键租机
            </Button>
            <Popup
                visible={contractVisible}
                onMaskClick={() => {
                    setcontractVisible(false);
                }}
                bodyStyle={popupStyle as any}
            >
                <p className={s.info1}>请输入您的联系方式</p>
                <p className={s.info2}>稍后将有专属客服与您联系</p>
                <Input
                    placeholder="请输入验证码"
                    style={{ '--text-align': 'center' }}
                    clearable
                    className={s.phoneInput}
                    onChange={handlePhoneVal}
                />
                <Button className={s.rentBtn} disabled={!isPhone(phone)} onClick={handleSubmitPhone}>
                    提交
                </Button>
            </Popup>
        </div>
    );
};

export default Contract;
