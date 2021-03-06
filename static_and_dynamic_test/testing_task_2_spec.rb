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

  def test_check_for_ace___FALSE
    assert_equal(false, CardGame.checkforAce(@card1))
  end

  def test_check_for_ace___TRUE
    assert_equal(true, CardGame.checkforAce(@card3))
  end

  def test_highest_card___9_of_Hearts___card2
    assert_equal(@card2, CardGame.highest_card(@card1, @card2))
  end

  def test_highest_card___9_of_Hearts___card2
    assert_equal(@card2, CardGame.highest_card(@card2, @card3))
  end

  def test_cards_total___13
    cards = [@card1, @card2, @card3]
    assert_equal("You have a total of 13", CardGame.cards_total(cards))
  end

end
