import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).lean();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    // hardcodedvalues
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    /* Recent Transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 })
      .lean();

    /* Overall Stats */
    const overallStat = await OverallStat.findOne({ year: currentYear }).lean();

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat;

    const thisMonthStat = overallStat.monthlyData.find(
      ({ month }) => month === currentMonth
    );

    const todayStat = overallStat.dailyData.find(
      ({ date }) => date === currentDay
    );

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStat,
      todayStat,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
