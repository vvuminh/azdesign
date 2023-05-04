import React, { useState } from 'react';
import './styles.scss'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { PageImages } from '../../../assets/images';
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: 'trang chủ',
    key: '',
  },
  {
    label: 'giới thiệu',
    key: 'gioi-thieu',
    children: [
      {
        label: 'Giới Thiệu',
        key: 'gioi-thieu',

      },
      {
        label: 'Profile',
        key: 'profile',
      },
      {
        label: 'Sơ đồ tổ chức',
        key: 'sodotochuc',
      },
      {
        label: 'Life Stype',
        key: 'lifestype',
      },
      {
        label: 'Tuyển dụng',
        key: 'tuyendung',
      },
    ],
  },
  {
    label: 'dịch vụ',
    key: 'dichvu',
  },
  {
    label: 'dự án',
    key: 'duan',
  },
  {
    label: 'báo giá',
    key: 'baogia',
  },
  {
    label: 'kiến thức',
    key: 'kienthuc',
  },
  {
    label: 'liên hệ',
    key: 'lienhe',
  },
  {
    label: 'phản hồi',
    key: 'phanhoi',
  },
];

const Headers: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div className='header-wrapper'>
      <div className='menu'>
        <a className='logo' href='##' target='_blank'>
          <img src={PageImages.azlogo} alt='logo'/>
        </a>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div className="sc_header-right">
					<a className="btn-hotline" href="tel:0981332223">0981 332 223</a>
					<a className="btn-nbgia" href="tel:0981332223">Gọi ngay </a>
					<a className="trigger_search" href='##' target='_blank'><i className="fa fa-search"></i></a>
					<form className="form_search" role="search" method="get" action="##">
					    {/* <input placeholder="Từ khóa tìm kiếm ..." value="" name="s" id="s"/> */}
					    <SearchOutlined/>
					</form>
					<a className="bar_ioc" href='##' target='_blank'>
						<img src={PageImages.icon_bar} alt='icon'/>
					</a>
					<a className="trigger_menu" href='##' target='_blank'>
						<i className="fa fa-bars"></i>
					</a>
			</div>
    </div>
  )
}

export default Headers;