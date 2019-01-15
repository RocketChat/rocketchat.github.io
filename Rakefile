task :test do
  # sh "bundle exec jekyll build"
  webinarIDs = %x[grep -roh '^webinarID.[^:-]*.[0-9][0-9][0-9]*' . | uniq -c ]

  webinarIDsArray = []
  webinarIDs.each_line { |line| webinarIDsArray << line.strip unless line == "\n" }

  # puts webinarIDsArray

  if webinarIDsArray.uniq.length == webinarIDsArray.length
    puts "No duplicate webinar IDs, all good!"
  else
    raise "Duplicate webinar ID, please make sure to change the webinarID property on it's file Frontmatter."
  end
end
