# Testing task 1:

## Carry out static testing on the code below.

### Read through code below and comment on any errors you can spot.

#### Don't correct the errors!


```ruby
class CardGame

# Missing 'attr_reader :suit, :value' which will make the suit the value properties readable outside of this class definition.

  def initialize(suit, value)
    @suit = suit
    # The semi-colon, below after 'value', is not correct syntax for ruby and should be removed.
    @value = value;                          
  end

# The below method should either be:
# (1) STATIC class method, i.e. prefixed with self., passing in the card we want to check -OR -
# (2) A normal class method, that is applied to a particular card instance - then we don't need 'card' passed in as a parameter.
  def checkforAce(card)
    # Should be a '==' not '=', as '=' assigns a value to a variable whereas == will compare left with right.            
    if card.value = 1
      return true
    else
      return false
    end
  end

# Indentation needs fixed for below method, as the current indentation makes it less readable.
# 'dif' is incorrect Ruby syntax - should be 'def'.
# A comma is missing between card1 and card2.
# Also this should be a STATIC class method too, i.e. prefixed with 'self.', as it is comparing two cards, taken in as parameters, rather than being applied to an individual instance of this class.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    # Should just be 'return card1', i.e. the whole card1 instance, as this makes more sense, if you want to know both the suit and the value or the highest card.
    return card.name
  else
    # Ought to have a 'return' keyword pre-pending this statement for good style, but Ruby will work without this.
    card2
  end
end
end   # this end statement should be at the end of the class.

def self.cards_total(cards)   # This method is not within the class.
  # Should be 'total = 0' to initialise this local method parameter 'total' to zero first.
  total
  for card in cards
    total += card.value
    # This return statement should be after the 'for' loop.
    # And 'total' needs to be explicitly converted to a string, i.e. to_s, if it is to be concatenated to a string.
    return "You have a total of" + total
  end
end

```
