import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
const TableInfo = () => {
  const stateInfoProduct = useSelector((state) => state?.product?.singleProduct);
  const { manHinh,cameraSau,cameraSelfie,boNhoTrong,cpu,dungLuongPin,theSim,heDieuHanh,xuatXu,thoiGianRaMat} = stateInfoProduct || {};
  return (
    <>
      <tbody>
        <tr>
          <td>Màn hình</td>
          <td>{manHinh}</td>
        </tr>
        <tr>
          <td>Camera sau</td>
          <td>{cameraSau}</td>
        </tr>
        <tr>
          <td>Camera Selfie</td>
          <td>{cameraSelfie}</td>
        </tr>
        <tr>
          <td>Bộ nhớ trong</td>
          <td>{boNhoTrong}</td>
        </tr>
        <tr>
          <td>CPU</td>
          <td>{cpu}</td>
        </tr>
        <tr>
          <td>Dung lượng pin</td>
          <td>{dungLuongPin}</td>
        </tr>
        <tr>
          <td>Thẻ sim</td>
          <td>{theSim} </td>
        </tr>
        <tr>
          <td>Hệ điều hành</td>
          <td>{heDieuHanh}</td>
        </tr>
        <tr>
          <td>Xuất xứ</td>
          <td>{xuatXu} </td>
        </tr>
        <tr>
          <td>Thời gian ra mắt</td>
          <td>{thoiGianRaMat}</td>
        </tr>
      </tbody>
    </>
  );
};

export default TableInfo;
