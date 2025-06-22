'use client';

import React, { useState } from 'react';

export default function Home() {
  const [goalTitle, setGoalTitle] = useState('稼げや祭\'25');
  const [currentAmount, setCurrentAmount] = useState(3250000);
  const [targetAmount, setTargetAmount] = useState(10000000);
  const [dailyIncrease, setDailyIncrease] = useState(180000);
  
  // 達成率の計算
  const achievementRate = (currentAmount / targetAmount) * 100;
  
  // 金額をフォーマット
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0
    }).format(amount);
  };
  
  // 数値入力を処理
  const handleNumberInput = (value, setter) => {
    const numValue = parseInt(value.replace(/[^\d]/g, ''));
    if (!isNaN(numValue)) {
      setter(numValue);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 p-4 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 mb-6">
        {/* GOAL表示 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            GOAL: 
            <input
              type="text"
              value={goalTitle}
              onChange={(e) => setGoalTitle(e.target.value)}
              className="ml-2 text-red-600 bg-transparent border-b-2 border-red-300 focus:border-red-600 outline-none text-center min-w-0 max-w-xs"
              placeholder="目標タイトル"
            />
          </h1>
          
          {/* 進捗バー */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-8 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${Math.min(achievementRate, 100)}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600 mt-2">
              {achievementRate.toFixed(1)}%
            </div>
          </div>
          
          {/* 金額表示 */}
          <div className="text-center space-y-4">
            {/* 現在の金額 */}
            <div className="text-4xl font-bold text-gray-800">
              <input
                type="text"
                value={formatCurrency(currentAmount)}
                onChange={(e) => handleNumberInput(e.target.value, setCurrentAmount)}
                className="bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none text-center w-64"
                placeholder="現在の金額"
              />
              <span className="text-green-600 text-2xl ml-2">
                (+
                <input
                  type="text"
                  value={formatCurrency(dailyIncrease)}
                  onChange={(e) => handleNumberInput(e.target.value, setDailyIncrease)}
                  className="bg-transparent border-b border-green-300 focus:border-green-600 outline-none text-center w-32 ml-1 mr-1"
                  placeholder="増加額"
                />
                )
              </span>
            </div>
            
            {/* 目標金額 */}
            <div className="text-gray-400 text-xl">
              / 
              <input
                type="text"
                value={formatCurrency(targetAmount)}
                onChange={(e) => handleNumberInput(e.target.value, setTargetAmount)}
                className="bg-transparent border-b border-gray-300 focus:border-gray-600 outline-none text-center w-48 ml-2"
                placeholder="目標金額"
              />
            </div>
          </div>
        </div>
        
        {/* 達成メッセージ */}
        {achievementRate >= 100 && (
          <div className="text-center mt-6 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white">
            <div className="text-2xl mb-2">🎉 目標達成！🎉</div>
            <div className="font-semibold">おめでとうございます！</div>
          </div>
        )}
      </div>
      
      {/* 白い枠の下側のコントロール */}
      <div className="max-w-lg w-full">
        {/* ヘルプテキスト */}
        <div className="text-center text-sm text-white opacity-80 mb-4">
          クリックで編集できます
        </div>
        
        {/* クイックアクション */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleNumberInput((currentAmount + dailyIncrease).toString(), setCurrentAmount)}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            💰 今日の増加分を追加
          </button>
          <button 
            onClick={() => {
              setGoalTitle('稼げや祭\'25');
              setCurrentAmount(3250000);
              setTargetAmount(10000000);
              setDailyIncrease(180000);
            }}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            🔄 リセット
          </button>
        </div>
      </div>
    </div>
  );
}