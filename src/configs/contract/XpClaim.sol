// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract XPClaim {
    // XP 포인트를 추적할 매핑 (사용자 지갑 주소 => XP 포인트)
    mapping(address => uint256) public xpBalances;

    // 클레임 이벤트 (로그 기록을 위해)
    event XPClaimed(address indexed user, uint256 amount);

    // 관리자 주소 (초기 배포자)
    address public owner;

    // 컨트랙트 생성자
    constructor() {
        owner = msg.sender;  // 배포하는 사람이 컨트랙트 관리자
    }

    // XP 포인트를 클레임하는 함수
    function claimXP(address user, uint256 xpAmount) external {
        require(user != address(0), "Invalid address");
        require(xpAmount > 0, "XP amount must be greater than zero");

        // XP 포인트를 지갑 주소에 추가
        xpBalances[user] += xpAmount;

        // 클레임 이벤트 기록
        emit XPClaimed(user, xpAmount);
    }

    // 관리자가 임의로 사용자에게 XP 포인트를 설정할 수 있는 함수
    function setXP(address user, uint256 xpAmount) external {
        require(msg.sender == owner, "Only the owner can set XP");
        require(user != address(0), "Invalid address");

        xpBalances[user] = xpAmount;
    }

    // 특정 사용자의 XP 포인트를 확인하는 함수
    function getXP(address user) external view returns (uint256) {
        return xpBalances[user];
    }
}
