require 'spec_helper'

describe Cart do 
 it { should have_many :reviews}
 it { should validate_presence_of :name}
end
