export const Rate = ({ active }) => {
  const fill = active ? "#007AFF" : "#707579";
  console.log(fill, "fill");
  return (
    <svg width="51" height="37" viewBox="0 0 51 37" fill="none">
      <g clipPath="url(#clip0_5_1403)">
        <path
          d="M18.0689 0.625C18.0689 0.45924 18.1401 0.300269 18.2668 0.183058C18.3936 0.065848 18.5654 0 18.7447 0H32.2594C32.4386 0 32.6105 0.065848 32.7372 0.183058C32.8639 0.300269 32.9351 0.45924 32.9351 0.625C32.9351 1.2975 32.9198 1.9375 32.8892 2.545C33.4232 2.62679 33.9341 2.80665 34.3918 3.07398C34.8494 3.3413 35.2446 3.69068 35.5539 4.10151C35.8632 4.51234 36.0805 4.9763 36.1929 5.46603C36.3053 5.95577 36.3105 6.46135 36.2083 6.95298C36.106 7.44461 35.8984 7.91233 35.5976 8.32855C35.2968 8.74477 34.9089 9.10107 34.4569 9.37643C34.0048 9.6518 33.4977 9.84065 32.9655 9.93186C32.4333 10.0231 31.8867 10.0148 31.358 9.9075C30.2903 12.2388 28.8199 13.3788 27.5292 13.6713V16.3875L29.4551 16.8325C29.7173 16.8925 29.9646 17.0012 30.1808 17.1512L32.6648 18.875C32.7783 18.9537 32.8621 19.0634 32.9044 19.1886C32.9467 19.3139 32.9453 19.4482 32.9005 19.5726C32.8556 19.6971 32.7696 19.8053 32.6545 19.882C32.5395 19.9587 32.4012 20 32.2594 20H18.7447C18.6028 20 18.4646 19.9587 18.3495 19.882C18.2345 19.8053 18.1484 19.6971 18.1036 19.5726C18.0587 19.4482 18.0574 19.3139 18.0997 19.1886C18.1419 19.0634 18.2257 18.9537 18.3392 18.875L20.8232 17.1512C21.0395 17.0012 21.2868 16.8925 21.549 16.8325L23.4748 16.3875V13.6713C22.1842 13.3788 20.7137 12.2388 19.6461 9.90625C19.1171 10.0141 18.5701 10.0229 18.0374 9.93193C17.5047 9.84101 16.9971 9.65228 16.5446 9.37689C16.0921 9.1015 15.7038 8.74503 15.4027 8.32854C15.1016 7.91204 14.8939 7.44397 14.7916 6.95195C14.6894 6.45994 14.6948 5.95397 14.8075 5.46392C14.9202 4.97387 15.1379 4.50968 15.4478 4.09876C15.7578 3.68784 16.1536 3.33852 16.6119 3.07144C17.0702 2.80436 17.5817 2.62493 18.1162 2.54375C18.0844 1.90459 18.0686 1.26484 18.0689 0.625ZM18.2027 3.8C17.4975 3.91935 16.8724 4.29292 16.465 4.83853C16.0576 5.38415 15.9012 6.05711 16.0302 6.70937C16.1593 7.36164 16.5631 7.93978 17.1531 8.31661C17.743 8.69345 18.4706 8.8381 19.1758 8.71875C18.7257 7.40625 18.3811 5.78625 18.2027 3.8ZM31.8296 8.71875C32.5348 8.8381 33.2624 8.69345 33.8523 8.31661C34.4423 7.93978 34.8461 7.36164 34.9752 6.70937C35.1042 6.05711 34.9478 5.38415 34.5404 4.83853C34.133 4.29292 33.5079 3.91935 32.8027 3.8C32.6229 5.7875 32.2783 7.40625 31.8296 8.71875ZM19.4258 1.25C19.4348 1.89583 19.46 2.50792 19.5015 3.08625C19.6772 5.62125 20.1191 7.51875 20.6773 8.92C21.8449 11.85 23.4532 12.5 24.1505 12.5C24.3298 12.5 24.5016 12.5658 24.6284 12.6831C24.7551 12.8003 24.8263 12.9592 24.8263 13.125V16.3875C24.8263 16.6662 24.7256 16.9368 24.5402 17.1565C24.3549 17.3762 24.0955 17.5323 23.8032 17.6L21.876 18.045C21.7885 18.0651 21.7063 18.1013 21.6341 18.1512L20.7719 18.75H30.2322L29.3699 18.1512C29.2974 18.1011 29.2146 18.065 29.1267 18.045L27.2008 17.6C26.9086 17.5323 26.6492 17.3762 26.4638 17.1565C26.2785 16.9368 26.1778 16.6662 26.1778 16.3875V13.125C26.1778 12.9592 26.249 12.8003 26.3757 12.6831C26.5024 12.5658 26.6743 12.5 26.8535 12.5C27.5509 12.5 29.1591 11.85 30.3268 8.92C30.8849 7.52 31.3269 5.62 31.5026 3.08625C31.5431 2.50792 31.5683 1.89583 31.5783 1.25H19.4258Z"
          fill={fill}
        />
        <path d="M18.0689 0.625C18.0689 0.45924 18.1401 0.300269 18.2668 0.183058C18.3936 0.065848 18.5654 0 18.7447 0H32.2594C32.4386 0 32.6105 0.065848 32.7372 0.183058C32.8639 0.300269 32.9351 0.45924 32.9351 0.625C32.9351 1.2975 32.9198 1.9375 32.8892 2.545C33.4232 2.62679 33.9341 2.80665 34.3918 3.07398C34.8494 3.3413 35.2446 3.69068 35.5539 4.10151C35.8632 4.51234 36.0805 4.9763 36.1929 5.46603C36.3053 5.95577 36.3105 6.46135 36.2083 6.95298C36.106 7.44461 35.8984 7.91233 35.5976 8.32855C35.2968 8.74477 34.9089 9.10107 34.4569 9.37643C34.0048 9.6518 33.4977 9.84065 32.9655 9.93186C32.4333 10.0231 31.8867 10.0148 31.358 9.9075C30.2903 12.2388 28.8199 13.3788 27.5292 13.6713V16.3875L29.4551 16.8325C29.7173 16.8925 29.9646 17.0012 30.1808 17.1512L32.6648 18.875C32.7783 18.9537 32.8621 19.0634 32.9044 19.1886C32.9467 19.3139 32.9453 19.4482 32.9005 19.5726C32.8556 19.6971 32.7696 19.8053 32.6545 19.882C32.5395 19.9587 32.4012 20 32.2594 20H18.7447C18.6028 20 18.4646 19.9587 18.3495 19.882C18.2345 19.8053 18.1484 19.6971 18.1036 19.5726C18.0587 19.4482 18.0574 19.3139 18.0997 19.1886C18.1419 19.0634 18.2257 18.9537 18.3392 18.875L20.8232 17.1512C21.0395 17.0012 21.2868 16.8925 21.549 16.8325L23.4748 16.3875V13.6713C22.1842 13.3788 20.7137 12.2388 19.6461 9.90625C19.1171 10.0141 18.5701 10.0229 18.0374 9.93193C17.5047 9.84101 16.9971 9.65228 16.5446 9.37689C16.0921 9.1015 15.7038 8.74503 15.4027 8.32854C15.1016 7.91204 14.8939 7.44397 14.7916 6.95195C14.6894 6.45994 14.6948 5.95397 14.8075 5.46392C14.9202 4.97387 15.1379 4.50968 15.4478 4.09876C15.7578 3.68784 16.1536 3.33852 16.6119 3.07144C17.0702 2.80436 17.5817 2.62493 18.1162 2.54375C18.0844 1.90459 18.0686 1.26484 18.0689 0.625ZM18.2027 3.8C17.4975 3.91935 16.8724 4.29292 16.465 4.83853C16.0576 5.38415 15.9012 6.05711 16.0302 6.70937C16.1593 7.36164 16.5631 7.93978 17.1531 8.31661C17.743 8.69345 18.4706 8.8381 19.1758 8.71875C18.7257 7.40625 18.3811 5.78625 18.2027 3.8ZM31.8296 8.71875C32.5348 8.8381 33.2624 8.69345 33.8523 8.31661C34.4423 7.93978 34.8461 7.36164 34.9752 6.70937C35.1042 6.05711 34.9478 5.38415 34.5404 4.83853C34.133 4.29292 33.5079 3.91935 32.8027 3.8C32.6229 5.7875 32.2783 7.40625 31.8296 8.71875ZM19.4258 1.25C19.4348 1.89583 19.46 2.50792 19.5015 3.08625C19.6772 5.62125 20.1191 7.51875 20.6773 8.92C21.8449 11.85 23.4532 12.5 24.1505 12.5C24.3298 12.5 24.5016 12.5658 24.6284 12.6831C24.7551 12.8003 24.8263 12.9592 24.8263 13.125V16.3875C24.8263 16.6662 24.7256 16.9368 24.5402 17.1565C24.3549 17.3762 24.0955 17.5323 23.8032 17.6L21.876 18.045C21.7885 18.0651 21.7063 18.1013 21.6341 18.1512L20.7719 18.75H30.2322L29.3699 18.1512C29.2974 18.1011 29.2146 18.065 29.1267 18.045L27.2008 17.6C26.9086 17.5323 26.6492 17.3762 26.4638 17.1565C26.2785 16.9368 26.1778 16.6662 26.1778 16.3875V13.125C26.1778 12.9592 26.249 12.8003 26.3757 12.6831C26.5024 12.5658 26.6743 12.5 26.8535 12.5C27.5509 12.5 29.1591 11.85 30.3268 8.92C30.8849 7.52 31.3269 5.62 31.5026 3.08625C31.5431 2.50792 31.5683 1.89583 31.5783 1.25H19.4258Z" />
      </g>
      <path
        d="M14.8691 34V26.9541H17.7158C19.2295 26.9541 20.1377 27.7988 20.1377 29.1416V29.1514C20.1377 30.084 19.6445 30.8555 18.8096 31.1582L20.3477 34H18.9072L17.5254 31.3486H16.1289V34H14.8691ZM16.1289 30.3818H17.584C18.3799 30.3818 18.8438 29.9375 18.8438 29.1807V29.1709C18.8438 28.4336 18.3604 27.9746 17.5596 27.9746H16.1289V30.3818ZM23.0346 34.0879C22.019 34.0879 21.2817 33.4629 21.2817 32.4912V32.4814C21.2817 31.5293 22.0092 30.9727 23.308 30.8945L24.6801 30.8115V30.3525C24.6801 29.8203 24.3334 29.5273 23.6791 29.5273C23.1225 29.5273 22.7612 29.7275 22.6391 30.0791L22.6342 30.0986H21.4868L21.4916 30.0547C21.6088 29.1562 22.4682 28.5605 23.7377 28.5605C25.1098 28.5605 25.8813 29.2246 25.8813 30.3525V34H24.6801V33.2676H24.5971C24.3041 33.7852 23.7377 34.0879 23.0346 34.0879ZM22.4829 32.4326C22.4829 32.8867 22.8686 33.1553 23.4057 33.1553C24.1381 33.1553 24.6801 32.6768 24.6801 32.042V31.6123L23.4789 31.6904C22.8002 31.7344 22.4829 31.9834 22.4829 32.4229V32.4326ZM29.5009 34.0244C28.2753 34.0244 27.7723 33.6143 27.7723 32.584V29.6055H26.9423V28.6631H27.7723V27.3545H29.0077V28.6631H30.1356V29.6055H29.0077V32.2959C29.0077 32.8281 29.2177 33.0527 29.7255 33.0527C29.8964 33.0527 29.9891 33.0479 30.1356 33.0332V33.9707C29.9598 34.0049 29.7352 34.0244 29.5009 34.0244ZM33.6429 34.1074C32.056 34.1074 31.0941 33.043 31.0941 31.3438V31.3389C31.0941 29.6592 32.0657 28.5605 33.5843 28.5605C35.1029 28.5605 36.0404 29.625 36.0404 31.2363V31.6367H32.3099C32.3245 32.5938 32.8421 33.1504 33.6673 33.1504C34.3265 33.1504 34.7025 32.8184 34.8196 32.5742L34.8343 32.54H35.9915L35.9769 32.584C35.806 33.2725 35.0931 34.1074 33.6429 34.1074ZM33.5989 29.5127C32.9202 29.5127 32.4124 29.9717 32.3196 30.8213H34.8538C34.7708 29.9473 34.2777 29.5127 33.5989 29.5127Z"
        fill={fill}
      />
      <defs>
        <clipPath id="clip0_5_1403">
          <rect width="23" height="20" fill="white" transform="translate(14)" />
        </clipPath>
      </defs>
    </svg>
  );
};