import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const header = useRef();
  const nav = useRef();

  const [theme, setTheme] = useState('system');

  const handlePageScroll = () => {
    header.current.classList.toggle('header--scroll', window.scrollY > 0);
    nav.current.classList.toggle('nav--scroll', window.scrollY > 0);
  };

  const handleThemeChange = e => {
    const themeData = e.target.value;
    document.documentElement.className = themeData;
    localStorage.setItem('theme', themeData);
    setTheme(themeData);
  };

  useEffect(() => {
    const themeData = localStorage.getItem('theme') ?? 'system';
    setTheme(themeData);
    (themeData !== 'system') && (document.documentElement.className = themeData);

    window.addEventListener('scroll', handlePageScroll);

    return () => {
      window.removeEventListener('scroll', handlePageScroll);
    };
  }, []);

  return (
    <header
      className="header"
      ref={header}
      id="header"
    >
      <nav
        className="nav"
        ref={nav}
      >
        <div className="container flexbox flexbox--centered-sides">
          <Link to={"/"}>
            <svg
              width="274"
              height="64"
              viewBox="0 0 274 64"
              xmlns="http://www.w3.org/2000/svg"
              className="img img--logo"
            >
              <path
                d="M273.052 29.719H269.551L269.562 44.3315C269.114 44.6438 268.283 44.7987 267.532 44.7987C265.54 44.7987 263.918 43.831 263.918 40.8102L263.914 19.4624C263.914 18.4768 264.556 18.4768 264.979 18.4768H268.506C269.354 18.4768 269.59 18.7789 269.59 19.4727V25.3402L273.052 25.3338C273.916 25.3338 273.916 25.9303 273.916 26.2477V28.7334C273.916 29.1686 273.916 29.719 273.052 29.719ZM256.595 36.6963H248.842C248.835 38.9901 250.41 40.096 252.878 40.096C254.46 40.096 255.992 39.5072 256.757 39.1847C257.536 38.8275 257.821 39.1526 258.03 39.593L259.082 42.0493C259.37 42.7546 258.976 43.0976 258.65 43.296C256.837 44.5005 254.197 44.928 252.342 44.928C246.042 44.928 243.113 41.7907 243.113 35.0387C243.113 28.7846 246.536 24.8986 252.032 24.8986C256.703 24.8986 259.976 28.6042 259.967 33.1354C259.963 36.2176 259.213 36.6963 256.595 36.6963ZM252.137 29.495C250.016 29.495 249.019 30.985 248.961 32.7795H255.244C255.195 30.4781 254.006 29.495 252.137 29.495ZM238.509 44.7987H234.911C234.464 44.7987 233.87 44.695 233.87 43.8464V34.3335C233.87 31.177 232.867 30.0608 230.028 30.0608C229.626 30.0608 228.828 30.0608 227.978 30.1875V43.8464C227.978 44.6438 227.628 44.7987 226.949 44.7987H223.375C222.931 44.7987 222.339 44.695 222.339 43.8464V28.7232C222.339 27.0656 222.738 25.9584 224.735 25.559C225.749 25.3773 228.458 25.2019 229.819 25.2019C236.626 25.2019 239.546 28.0294 239.546 34.6458V43.8464C239.546 44.6438 239.196 44.7987 238.509 44.7987ZM209.789 44.9331C204.227 44.9331 201.414 42.8454 201.414 38.7341C201.414 34.9414 204.259 32.5645 209.028 32.5645H212.529V31.8592C212.529 30.7213 212.2 29.6691 209.823 29.6691C208.498 29.6691 206.341 29.9648 205.021 30.3309C204.877 30.3684 204.729 30.3886 204.58 30.391C203.944 30.391 203.821 29.8432 203.772 29.6448L203.215 27.1693C203.054 26.5818 203.215 26.2131 203.758 25.9981C206.217 25.1034 208.809 24.9216 210.552 24.9216C215.606 24.9216 218.166 27.2051 218.166 31.7171V41.9431C218.166 42.56 218.093 43.1501 217.276 43.593C214.724 44.8051 211.191 44.9331 209.789 44.9331ZM212.497 36.5018H210.066C207.813 36.5018 206.767 37.2736 206.767 38.7917C206.767 39.6083 207.503 40.9472 209.924 40.9472C210.405 40.9472 211.64 40.8563 212.497 40.5837V36.5018ZM196.12 44.7872C194.125 44.7872 192.512 43.552 192.512 40.7974L192.508 32.3469H192.504V19.4215C192.504 18.4333 193.234 18.4333 193.661 18.4333H197.043C197.788 18.4333 198.18 18.6931 198.18 19.3831L198.154 44.3175C197.71 44.6349 196.872 44.7872 196.12 44.7872ZM180.662 44.2816C179.45 44.2847 178.241 44.1577 177.056 43.9027L177.037 52.2637C176.641 52.4608 175.717 52.6298 174.966 52.6298C172.974 52.6298 171.355 51.159 171.355 48.6438L171.341 27.1949C171.348 26.6163 171.642 26.2106 172.357 25.824C175.201 24.5402 178.764 24.4262 180.168 24.4365C186.099 24.4736 189.033 27.9309 188.986 34.4371C188.951 40.5466 185.866 44.3162 180.662 44.2816ZM179.475 29.4669C178.692 29.4755 177.913 29.5747 177.153 29.7626L177.092 38.8992C177.927 39.1198 178.787 39.2333 179.651 39.2371C182.075 39.2538 183.264 37.6371 183.29 34.2938C183.308 30.9248 182.172 29.4861 179.475 29.4669ZM164.277 36.6963H156.518C156.515 38.9901 158.09 40.096 160.553 40.096C162.143 40.096 163.668 39.5072 164.438 39.1847C164.718 39.0886 164.884 39.0579 165.023 39.0579C165.466 39.0579 165.631 39.4202 165.702 39.593L166.766 42.0493C167.049 42.7546 166.651 43.0976 166.331 43.296C164.516 44.5005 161.885 44.928 160.023 44.928C153.722 44.928 150.793 41.7907 150.793 35.0387C150.793 28.7846 154.212 24.8986 159.712 24.8986C164.38 24.8986 167.657 28.6042 167.651 33.1354C167.643 36.2176 166.9 36.6963 164.277 36.6963ZM159.818 29.495C157.695 29.495 156.7 30.985 156.646 32.7795H162.926C162.87 30.4781 161.682 29.495 159.818 29.495ZM145.998 44.7987H142.4C141.952 44.7987 141.361 44.695 141.361 43.8464V34.3335C141.361 31.177 140.358 30.0608 137.513 30.0608C137.116 30.0608 136.317 30.0608 135.471 30.1875V43.8464C135.471 44.6438 135.119 44.7987 134.437 44.7987H130.87C130.426 44.7987 129.832 44.695 129.832 43.8464V28.7232C129.832 27.0656 130.23 25.9584 132.23 25.559C133.244 25.3773 135.954 25.2019 137.306 25.2019C144.125 25.2019 147.027 28.0294 147.027 34.6458V43.8464C147.027 44.6438 146.685 44.7987 145.998 44.7987ZM123.176 44.7859C121.183 44.7859 119.571 43.552 119.571 40.7974L119.556 26.6419C119.556 25.6576 120.207 25.6576 120.635 25.6576H124.164C125.03 25.6576 125.235 26.0135 125.235 26.6074C125.235 26.6074 125.202 43.6237 125.202 44.3149C124.763 44.6362 123.931 44.7859 123.176 44.7859ZM124.129 23.6621H120.597C120.155 23.6621 119.557 23.5635 119.557 22.7136V20.3379C119.557 19.4867 120.155 19.3895 120.597 19.3895H124.129C124.806 19.3895 125.201 19.5431 125.201 20.3379V22.7136C125.201 23.5085 124.806 23.6621 124.129 23.6621ZM108.056 44.928C102.421 44.928 99.4394 41.5078 99.4394 35.0323C99.4394 28.8115 102.861 24.9485 108.371 24.9485C110.359 24.9485 112.399 25.3965 113.971 26.1798C114.7 26.5242 114.813 26.8403 114.502 27.5814L113.542 30.2707C113.432 30.5498 113.234 30.9133 112.755 30.9133C112.561 30.9133 112.351 30.8544 112.093 30.7827C110.835 30.3693 109.711 30.1645 108.751 30.1645C105.623 30.1645 105.285 33.5654 105.285 35.0323C105.285 38.2733 106.378 39.721 108.853 39.721C110.445 39.721 111.963 39.2243 112.726 38.9325C113.005 38.8288 113.18 38.7776 113.347 38.7776C113.81 38.7776 113.957 39.2077 114.033 39.4458L114.994 42.0762C115.188 42.5075 115.35 43.0182 114.616 43.4445C112.311 44.7386 109.521 44.928 108.056 44.928ZM83.2615 24.2381C83.2615 24.2381 82.8288 25.1418 82.3731 24.5875C82.1568 24.681 81.8931 24.5786 81.6474 23.8758C81.1277 22.3821 81.0253 22.1875 80.9139 21.7754C80.7168 21.0432 80.7808 20.6656 81.1367 20.0986L82.2554 18.6163C82.2554 18.6163 82.6419 17.9802 82.9466 18.4666C83.1079 18.3526 83.3152 18.3271 83.4778 18.7392C83.4778 18.7392 83.9744 20.1638 84.1549 20.7603C84.48 21.824 84.5939 22.1696 84.2138 22.8685C83.8451 23.5533 83.2615 24.2381 83.2615 24.2381ZM81.3811 26.9171C80.6157 27.7824 80.2074 28.2509 79.7517 28.7463C79.1795 29.3645 78.2771 30.3974 77.6461 30.3104C77.4512 30.2882 77.2652 30.2163 77.1059 30.1018C76.5043 29.9699 76.2624 29.5219 75.9117 28.4979C75.5354 27.4061 74.9671 26.1376 76.0448 25.161C76.0448 25.161 77.0253 24.2586 77.7562 23.5661C78.496 22.8749 79.305 22.0685 79.305 22.0685C79.305 22.0685 79.8247 21.6384 80.2048 21.9955C80.3904 21.9686 80.5952 22.0134 80.7552 22.2643C81.0957 22.8019 81.5501 24.0998 81.6845 24.5619C81.8138 25.024 82.1376 26.0454 81.3811 26.9171ZM76.3635 23.1808C76.3635 23.1808 75.3715 24.1485 74.5805 23.6352C74.2656 23.6006 73.9507 23.4086 73.7024 22.9184C72.9818 21.4784 72.6029 20.672 72.6029 20.672C72.6029 20.672 71.7287 19.0669 73.1149 17.9571C74.5639 16.809 75.6071 15.9271 76.0077 15.5187C76.3034 15.2205 76.7015 14.9235 77.1123 15.1987C77.3863 15.1616 77.6807 15.3063 77.9699 15.8387C78.3885 16.617 79.2282 18.3488 79.2282 18.3488C79.2282 18.3488 80.0717 19.8298 78.9991 20.8051C77.9943 21.7242 76.3635 23.1808 76.3635 23.1808ZM72.0832 26.3322C70.7189 27.3697 69.3428 28.3917 67.9552 29.3978C67.9552 29.3978 66.9824 30.1747 66.0647 30.1747C65.6359 30.1747 65.3351 30.0787 65.0957 29.9085C64.6144 29.7523 64.3546 29.3914 64.0896 28.8909C63.6775 28.119 63.2461 27.2128 62.9619 26.633C62.6752 26.0531 62.2208 24.6963 63.9514 23.9194C63.9514 23.9194 65.0739 23.2038 66.4435 22.3706C67.2918 21.8521 68.1295 21.3165 68.9562 20.7642C68.9562 20.7642 69.8215 20.2125 70.5229 20.6182C70.8211 20.6656 71.1219 20.8256 71.3562 21.2071C72.041 22.3181 72.6016 23.6019 72.6016 23.6019C72.6016 23.6019 73.5411 25.1981 72.0832 26.3322ZM63.6583 35.3728C63.9565 35.4906 64.2355 35.7158 64.4442 36.1165C64.4442 36.1165 65.449 38.1491 65.6871 38.6522C66.0045 39.3165 65.9162 40.5619 64.7591 41.3171C63.5994 42.0672 58.5575 44.7501 58.5575 44.7501C58.5575 44.7501 56.7527 45.5373 55.7363 44.48C55.506 44.3332 55.3135 44.1341 55.1744 43.8989C54.2515 42.3578 54.1248 41.888 53.9136 41.4426C53.7075 40.992 53.0983 39.5174 55.3242 38.5357C55.3242 38.5357 56.6029 37.9994 58.4282 37.0816C60.2522 36.1638 61.4695 35.3946 61.4695 35.3946C61.4695 35.3946 62.7738 34.6675 63.6583 35.3728ZM55.3408 36.3059C54.2951 36.8333 52.809 37.44 51.8554 36.5338C51.5863 36.3671 51.3643 36.1344 51.2103 35.8579C50.3655 34.4166 49.6461 32.8179 49.6461 32.8179C49.6461 32.8179 48.4685 30.7635 51.113 29.76C51.113 29.76 52.5427 29.1968 54.1402 28.4595C55.7389 27.7235 57.2032 27.0438 57.2032 27.0438C57.2032 27.0438 58.5741 26.4154 59.5994 27.0874C59.9603 27.2295 60.3021 27.4906 60.5594 27.9501C61.5143 29.6435 61.8983 30.519 61.8983 30.519C61.8983 30.519 62.9863 32.3328 61.0599 33.4426C59.1194 34.5536 56.2803 35.8234 55.3408 36.3059ZM54.9427 50.0288C55.1219 50.1658 55.2871 50.3373 55.424 50.5651C56.2803 51.9821 56.5491 52.5901 56.5491 52.5901C56.5491 52.5901 57.568 54.336 55.5162 55.0694C53.1648 55.9142 48.8384 57.0394 48.8384 57.0394C48.8384 57.0394 46.3795 57.6307 45.4746 56.2739L45.4387 56.2189C45.3572 56.1403 45.2842 56.0532 45.2211 55.959C44.265 54.519 43.7824 53.6935 43.7824 53.6935C43.7824 53.6935 42.9095 52.0832 44.9306 51.5763C44.9306 51.5763 46.8839 51.1104 48.7783 50.5382C50.6138 49.9802 52.192 49.4566 52.192 49.4566C52.192 49.4566 53.9827 48.8794 54.9427 50.0288ZM50.7418 41.8727C51.1411 42.1594 51.2973 42.4819 51.2973 42.4819C51.2973 42.4819 51.84 43.4355 52.7616 45.2877C53.9149 47.6263 51.1578 48.2419 51.1578 48.2419C51.1578 48.2419 48.6259 48.9869 45.1815 50.0352C42.592 50.8211 41.5143 49.7792 41.1546 49.2595C40.9958 49.103 40.8658 48.9197 40.7706 48.7181L39.3178 46.1645C38.2618 44.1024 40.1703 43.5341 41.9443 43.1488C42.9811 42.9222 45.0176 42.2656 47.6711 41.4272C49.417 40.8781 50.3335 41.4502 50.7418 41.8727ZM46.0531 32.7514C46.2848 32.8998 46.505 33.1021 46.6944 33.3747C47.6544 34.761 48.352 36.6669 48.352 36.6669C48.352 36.6669 49.865 38.985 46.9274 40.0192C43.9872 41.056 41.0407 41.7715 41.0407 41.7715C41.0407 41.7715 38.2106 42.9312 37.0202 41.3286C36.8744 41.1908 36.7505 41.0315 36.6528 40.8563C36.0287 39.7094 35.4843 38.5209 35.0234 37.2992C35.0234 37.2992 33.8458 35.0861 36.7539 34.3744C36.7539 34.3744 38.6944 33.8675 40.1971 33.4003C41.5744 32.9715 43.5251 32.2957 43.5251 32.2957C43.5251 32.2957 45.0099 31.8438 46.0531 32.7514ZM36.0039 23.7798C37.8752 23.1309 39.0042 22.8672 39.0042 22.8672C39.0042 22.8672 40.5581 22.2438 41.6589 23.0106C42.0365 23.2 42.3795 23.52 42.6215 24.0461C43.6173 26.2195 44.0717 27.4739 44.0717 27.4739C44.0717 27.4739 45.2864 29.7485 43.0835 30.624C40.7923 31.5341 36.9421 32.6298 36.9421 32.6298C36.9421 32.6298 34.4256 33.6231 33.3722 32.4071C33.1804 32.2549 33.0277 32.0592 32.9267 31.8362C31.9834 29.7805 31.1757 27.6173 31.1757 27.6173C31.1757 27.6173 30.5178 25.5987 32.6349 24.8768C32.6349 24.8768 34.2771 24.3802 36.0039 23.7798ZM32.5517 45.3299C33.8304 45.1725 35.0861 45.1469 36.0346 46.391C36.1677 46.5331 36.2957 46.697 36.4173 46.8851L37.6717 49.0138C37.6717 49.0138 38.9786 51.0503 36.8115 51.2589C34.7162 51.4637 31.68 51.5238 31.68 51.5238C31.68 51.5238 29.5258 51.8861 28.48 50.519C28.0218 49.9174 27.6698 49.3478 27.4125 48.8909C27.1682 48.4877 26.9485 48.0701 26.7546 47.6403C26.7546 47.6403 25.6026 45.9584 27.7402 45.7856C29.8087 45.6218 31.5456 45.4592 32.5517 45.3299ZM24.8781 43.799C24.5338 43.5366 24.1869 43.0349 23.8797 42.4832C23.5432 41.9026 23.2497 41.2981 23.0016 40.6746C22.6291 39.7504 22.313 39.1053 22.7392 38.3667C23.136 37.687 24.5619 37.6653 24.5619 37.6653C24.5619 37.6653 25.5655 37.5334 26.7891 37.2864C28.0179 37.0419 29.1891 36.8333 29.1891 36.8333C29.1891 36.8333 30.9171 36.416 31.6595 37.5923L31.6672 37.6038C31.7274 37.6717 31.7939 37.728 31.8451 37.8099C32.6195 39.0413 33.3376 40.8525 33.3376 40.8525C33.3376 40.8525 34.5344 43.1539 32.7399 43.5174C30.9466 43.8784 28.0128 44.1831 27.401 44.2189C26.1261 44.2919 25.6218 44.3712 24.8781 43.799ZM24.3674 20.0487C19.8106 29.9136 21.4003 39.36 23.7594 46.5741C23.8093 46.729 23.8733 46.8762 23.9347 47.0259C24.0474 47.1373 24.16 47.2538 24.2611 47.3958C25.2083 48.7194 25.577 49.44 25.577 49.44C25.577 49.44 25.7293 49.6282 25.8407 49.8739C26.0122 50.1402 26.2899 50.6893 25.9187 51.0298C26.4474 51.8503 27.0375 52.6272 27.6672 53.3696C28.0525 53.5245 28.4122 53.751 28.7501 54.1043C29.7165 55.1232 30.3616 56.1088 30.3642 56.1127C35.2307 60.3149 41.5194 62.6739 46.2413 62.7328C56.1357 62.8442 64.768 58.6599 70.3603 51.2589H70.784C65.1162 58.9619 55.9591 64.0013 45.7728 64.0013C39.9002 64.0013 34.2656 62.3552 29.5347 59.4752C28.4237 58.797 27.3577 58.0475 26.3437 57.2314C26.0698 57.1943 25.8189 57.1597 25.5859 57.1302C24.4723 56.9946 23.4995 56.841 22.6253 55.9667C22.3245 55.6659 21.1111 54.1082 20.9754 53.9046C20.9036 53.8024 20.8536 53.6865 20.8282 53.5642C20.3981 52.8819 21.0215 52.6144 21.5783 52.6515L21.7114 52.6618C21.1909 52.0466 20.693 51.4126 20.2189 50.761C19.433 50.601 18.4883 50.2976 18.0954 49.7178C17.2263 48.4544 16.6733 47.5123 16.6733 47.5123C16.6733 47.5123 16.6272 47.4151 16.5875 47.2845L16.5645 47.2448C16.5645 47.2448 16.0077 46.1478 17.1431 46.1632L17.4848 46.1645C17.1991 45.5851 16.9327 44.9964 16.6861 44.3994C16.4775 44.3866 16.3571 44.3763 16.3571 44.3763C16.3571 44.3763 15.0567 44.4416 14.3872 43.2998C13.7536 42.2259 13.184 40.8128 13.184 40.8128C13.184 40.8128 13.1584 40.7475 13.1328 40.6567L13.1008 40.5811C13.1008 40.5811 12.5235 39.2896 14.0467 39.2154L15.0426 39.1437C14.4845 36.6886 14.1773 34.1222 14.2183 31.552C14.3437 24.0038 17.0202 16.8371 21.7075 11.2845C27.5623 4.35329 35.9872 0.00769043 45.4938 0.00769043C49.8343 0.00769043 53.9034 0.81153 57.6307 2.39105C56.6247 2.27969 56.1703 2.18625 55.1399 2.13889C42.7584 1.56417 29.7741 8.34177 24.3674 20.0487ZM14.6867 46.5101C15.3344 47.1846 15.8682 48.2048 16.2189 48.6861C16.4403 48.992 16.6157 49.3056 16.6861 49.568C16.9434 50.1158 16.8986 50.5498 16.0807 50.455C14.7127 50.2758 13.3516 50.0474 12 49.7702C11.2256 49.6013 10.3053 49.4656 9.65505 48.535C9.04193 47.6608 8.47617 46.6022 8.47617 46.6022C8.47617 46.6022 8.34177 46.345 8.30849 46.0787C8.23937 45.8637 8.18433 45.5654 8.34433 45.3888C8.61313 45.0944 9.24033 45.3056 9.24033 45.3056C9.24033 45.3056 9.85985 45.4375 11.2845 45.6077C12.6912 45.7766 14.0429 45.8304 14.6867 46.5101ZM8.71809 48.201C8.84993 48.5606 8.90241 49.0586 7.97825 48.7987C6.63937 48.4275 5.47841 47.9552 4.89089 47.6147C4.29825 47.273 3.90017 47.2064 3.25633 46.0749C2.78017 45.2339 2.32065 44.3943 2.33985 43.9872C2.28865 43.7786 2.28865 43.616 2.38337 43.5379C2.67521 43.2947 3.10017 43.5661 3.47265 43.7146C3.47265 43.7146 4.47105 44.1344 5.36321 44.448C6.22721 44.7475 6.94657 44.8947 7.51873 45.8522C8.08833 46.8173 8.42369 47.4547 8.51713 47.6275C8.56065 47.7082 8.69377 47.9693 8.71809 48.201ZM4.72961 43.1526C2.95553 42.6355 2.36545 42.3296 2.07873 42.176C1.71009 41.9725 1.31969 41.7575 0.907532 40.8653C0.288012 39.5187 0.120332 39.0746 0.120332 39.0746C0.120332 39.0746 0.0204922 38.8403 0.0320122 38.6291C-0.0332678 38.3373 -0.0191878 37.8867 0.828172 38.1491C1.94177 38.4896 2.35265 38.5997 2.82241 38.7059C3.90273 38.9466 4.43649 39.1923 4.82689 40.105L5.47585 41.591C5.47585 41.591 5.73313 42.0352 5.77921 42.4269C5.92129 42.9184 5.88161 43.488 4.72961 43.1526ZM12.672 51.1693C14.0595 51.4739 14.5741 51.5981 15.6275 51.7786C16.8666 51.9936 18.3744 52.1715 19.1219 53.0279C19.1219 53.0279 19.6941 53.7088 20.0205 54.135L20.7219 55.0502C20.7219 55.0502 20.8832 55.2653 20.9242 55.4765C21.0906 55.744 21.3658 56.3712 20.0832 56.1536C18.954 55.9692 17.8316 55.7451 16.7181 55.4816C15.6839 55.2346 14.8557 55.1027 14.1338 54.7302C13.2813 54.2835 12.6195 53.28 12.1715 52.6042C11.9783 52.3187 11.7991 52.0039 11.776 51.7645C11.5763 51.305 11.6467 50.9453 12.672 51.1693ZM69.8355 42.3078C69.417 41.024 70.0762 40.0896 70.7571 39.6134C71.4304 39.1437 73.3197 37.6243 73.9891 37.0919C74.6599 36.5594 75.4611 35.6813 76.1728 35.5763C76.2819 35.5612 76.3931 35.5727 76.4967 35.6099C76.6004 35.6472 76.6935 35.709 76.768 35.7901C77.3581 35.863 77.6359 36.7194 77.8266 37.2672C78.0403 37.8688 78.4397 38.8352 78.4397 39.5443C78.4397 40.2547 78.4 40.7002 77.5335 41.5168C76.6656 42.3347 73.8816 44.5696 73.8816 44.5696C73.2531 45.0381 72.6989 45.5309 71.9283 45.408C71.6945 45.3654 71.4811 45.2477 71.3203 45.0727C70.5575 44.7488 70.2183 43.479 69.8355 42.3078Z"
                fill="currentColor"
              />
              <path
                d="M273.052 29.719H269.551L269.562 44.3315C269.114 44.6438 268.283 44.7987 267.532 44.7987C265.54 44.7987 263.918 43.831 263.918 40.8102L263.914 19.4624C263.914 18.4768 264.556 18.4768 264.979 18.4768H268.506C269.354 18.4768 269.59 18.7789 269.59 19.4726V25.3402L273.052 25.3338C273.916 25.3338 273.916 25.9302 273.916 26.2477V28.7334C273.916 29.1686 273.916 29.719 273.052 29.719ZM256.595 36.6963H248.842C248.835 38.9901 250.41 40.096 252.878 40.096C254.46 40.096 255.992 39.5072 256.757 39.1847C257.536 38.8275 257.821 39.1526 258.03 39.593L259.082 42.0493C259.37 42.7546 258.976 43.0976 258.65 43.296C256.837 44.5005 254.196 44.928 252.342 44.928C246.042 44.928 243.113 41.7907 243.113 35.0387C243.113 28.7846 246.536 24.8986 252.032 24.8986C256.703 24.8986 259.976 28.6042 259.967 33.1354C259.963 36.2176 259.213 36.6963 256.595 36.6963ZM252.137 29.495C250.016 29.495 249.019 30.985 248.961 32.7795H255.244C255.195 30.4781 254.006 29.495 252.137 29.495ZM238.509 44.7987H234.911C234.464 44.7987 233.87 44.695 233.87 43.8464V34.3334C233.87 31.177 232.867 30.0608 230.028 30.0608C229.626 30.0608 228.828 30.0608 227.978 30.1875V43.8464C227.978 44.6438 227.628 44.7987 226.949 44.7987H223.375C222.931 44.7987 222.339 44.695 222.339 43.8464V28.7232C222.339 27.0656 222.738 25.9584 224.735 25.559C225.749 25.3773 228.458 25.2019 229.819 25.2019C236.626 25.2019 239.546 28.0294 239.546 34.6458V43.8464C239.546 44.6438 239.196 44.7987 238.509 44.7987ZM209.789 44.9331C204.227 44.9331 201.414 42.8454 201.414 38.7341C201.414 34.9414 204.259 32.5645 209.028 32.5645H212.529V31.8592C212.529 30.7213 212.2 29.6691 209.823 29.6691C208.498 29.6691 206.341 29.9648 205.021 30.3309C204.877 30.3684 204.729 30.3886 204.58 30.391C203.944 30.391 203.821 29.8432 203.772 29.6448L203.215 27.1693C203.054 26.5818 203.215 26.2131 203.758 25.9981C206.217 25.1034 208.809 24.9216 210.552 24.9216C215.606 24.9216 218.166 27.2051 218.166 31.7171V41.943C218.166 42.56 218.093 43.1501 217.276 43.593C214.724 44.8051 211.191 44.9331 209.789 44.9331ZM212.497 36.5018H210.066C207.813 36.5018 206.767 37.2736 206.767 38.7917C206.767 39.6083 207.503 40.9472 209.924 40.9472C210.405 40.9472 211.64 40.8563 212.497 40.5837V36.5018ZM196.12 44.7872C194.125 44.7872 192.512 43.552 192.512 40.7974L192.508 32.3469H192.504V19.4214C192.504 18.4333 193.234 18.4333 193.661 18.4333H197.043C197.788 18.4333 198.18 18.6931 198.18 19.383L198.154 44.3174C197.71 44.6349 196.872 44.7872 196.12 44.7872ZM180.662 44.2816C179.45 44.2847 178.241 44.1577 177.056 43.9027L177.037 52.2637C176.641 52.4608 175.717 52.6298 174.966 52.6298C172.974 52.6298 171.355 51.159 171.355 48.6438L171.341 27.1949C171.348 26.6163 171.642 26.2106 172.357 25.824C175.201 24.5402 178.764 24.4262 180.168 24.4365C186.099 24.4736 189.033 27.9309 188.986 34.4371C188.951 40.5466 185.866 44.3162 180.662 44.2816ZM179.475 29.4669C178.692 29.4755 177.913 29.5747 177.153 29.7626L177.092 38.8992C177.927 39.1198 178.787 39.2333 179.651 39.2371C182.075 39.2538 183.264 37.6371 183.29 34.2938C183.308 30.9248 182.172 29.4861 179.475 29.4669ZM164.276 36.6963H156.518C156.515 38.9901 158.09 40.096 160.553 40.096C162.143 40.096 163.668 39.5072 164.438 39.1847C164.718 39.0886 164.884 39.0579 165.023 39.0579C165.466 39.0579 165.631 39.4202 165.702 39.593L166.766 42.0493C167.049 42.7546 166.651 43.0976 166.331 43.296C164.516 44.5005 161.885 44.928 160.023 44.928C153.722 44.928 150.793 41.7907 150.793 35.0387C150.793 28.7846 154.212 24.8986 159.712 24.8986C164.38 24.8986 167.657 28.6042 167.651 33.1354C167.643 36.2176 166.9 36.6963 164.276 36.6963ZM159.818 29.495C157.695 29.495 156.7 30.985 156.646 32.7795H162.926C162.87 30.4781 161.682 29.495 159.818 29.495ZM145.998 44.7987H142.4C141.952 44.7987 141.361 44.695 141.361 43.8464V34.3334C141.361 31.177 140.358 30.0608 137.513 30.0608C137.116 30.0608 136.317 30.0608 135.471 30.1875V43.8464C135.471 44.6438 135.119 44.7987 134.437 44.7987H130.87C130.426 44.7987 129.832 44.695 129.832 43.8464V28.7232C129.832 27.0656 130.23 25.9584 132.23 25.559C133.244 25.3773 135.954 25.2019 137.306 25.2019C144.125 25.2019 147.027 28.0294 147.027 34.6458V43.8464C147.027 44.6438 146.685 44.7987 145.998 44.7987ZM123.176 44.7859C121.183 44.7859 119.571 43.552 119.571 40.7974L119.556 26.6419C119.556 25.6576 120.207 25.6576 120.635 25.6576H124.164C125.03 25.6576 125.235 26.0134 125.235 26.6074C125.235 26.6074 125.202 43.6237 125.202 44.3149C124.763 44.6362 123.931 44.7859 123.176 44.7859ZM124.129 23.6621H120.596C120.155 23.6621 119.557 23.5635 119.557 22.7136V20.3379C119.557 19.4867 120.155 19.3894 120.596 19.3894H124.129C124.806 19.3894 125.201 19.543 125.201 20.3379V22.7136C125.201 23.5085 124.806 23.6621 124.129 23.6621ZM108.056 44.928C102.42 44.928 99.4394 41.5078 99.4394 35.0323C99.4394 28.8115 102.861 24.9485 108.371 24.9485C110.359 24.9485 112.399 25.3965 113.971 26.1798C114.7 26.5242 114.813 26.8403 114.502 27.5814L113.542 30.2707C113.432 30.5498 113.234 30.9133 112.755 30.9133C112.561 30.9133 112.351 30.8544 112.093 30.7827C110.835 30.3693 109.711 30.1645 108.751 30.1645C105.623 30.1645 105.285 33.5654 105.285 35.0323C105.285 38.2733 106.378 39.721 108.852 39.721C110.445 39.721 111.963 39.2243 112.726 38.9325C113.005 38.8288 113.18 38.7776 113.347 38.7776C113.81 38.7776 113.957 39.2077 114.033 39.4458L114.994 42.0762C115.188 42.5075 115.35 43.0182 114.616 43.4445C112.311 44.7386 109.521 44.928 108.056 44.928Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <div className="off-canvas off-canvas--top" id="searchOffCanvas">
            <div className="off-canvas__child">
              <a href="#header" className="off-canvas__close icon">
                <i className="bi bi-x"></i>
              </a>
              <form className="form">
                <input type="search" name="q" placeholder="Pregunta" className="form__input" />
              </form>
            </div>
          </div>
          <div className="d-flex a-items-center g-5xs">
            <a href="#searchOffCanvas" className="icon icon--2xs">
              <i className="bi bi-search"></i>
            </a>
            <select
              className="select"
              onChange={handleThemeChange}
              value={theme}
            >
              <option value="">💻</option>
              <option value="dark">🌚</option>
              <option value="light">🌞</option>
              <option value="classic">💙</option>
              <option value="silver">🤍</option>
              <option value="gold">💛</option>
              <option value="black">🖤</option>
            </select>
            <a href="#menuOffCanvas" className="icon">
              <i className="bi bi-list"></i>
            </a>
          </div>
        </div>
      </nav>
      <nav>
        <div className="container flexbox flexbox--centered-sides">
          <a
            href="https://www.cineplanet.com.pe/peliculas"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Películas
          </a>
          <div className="off-canvas off-canvas--right" id="menuOffCanvas">
            <div className="off-canvas__child">
              <a href="#header" className="off-canvas__close icon">
                <i className="bi bi-x"></i>
              </a>
              <ul className="list d-flex f-direction-column g-2xs">
                <li>
                  <Link
                    to={"#"}
                    className="link"
                  >
                    Categorías
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className="link"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="list d-flex g-5xs">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link link--xl"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link link--xl"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link link--xl"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link link--xl"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;