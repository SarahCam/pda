require('minitest/autorun')
require('minitest/rg')

require_relative('testing_task_2.rb')

class CardGameTest < MiniTest::Test

  def setup
    @card1 = CardGame.new("Spades", 3)
    @card2 = CardGame.new("Hearts", 9)
    @card3 = CardGame.new("Diamonds", 1)
  end

  def test_get_suit
    assert_equal("Spades", @card1.suit)
  end

  def test_get_value
    assert_equal(3, @card1.value)
  end

end
