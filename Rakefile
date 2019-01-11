task :test do
  # sh "bundle exec jekyll build"
  webinarIDs = %x[grep -roh '^webinarID.[^:-]*.[0-9][0-9][0-9]*' . | uniq -c ]

  ar = []
  webinarIDs.each_line { |line| ar << line.strip unless line == "\n" }

  # puts ar

  if ar.uniq.length == ar.length
    puts "No duplicate webinar IDs, all good!"
  else
    raise "Duplicate webinar ID, please make sure to change the webinarID property on it' file Frontmatter."
  end
end
