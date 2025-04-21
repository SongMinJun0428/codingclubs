// 테스트용 과제 목록 반환
module.exports = async (req, res) => {
  return res.status(200).json([
    {
      data: {
        name: "박우승",
        title: "2주차 숙제",
        comment: "열심히 했어요!",
        file: "#"
      },
      created_at: new Date().toISOString()
    },
    {
      data: {
        name: "이채환",
        title: "1주차 숙제",
        comment: "",
        file: "#"
      },
      created_at: new Date().toISOString()
    }
  ]);
};
